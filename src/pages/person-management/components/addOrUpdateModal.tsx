import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Modal, Button, message } from 'antd';
import BaseForm from '@/pages/components/base-form';
import Upload1 from '@/pages/components/upload';
import {insertPerson, updatePerson} from '@/services/person';
import styles from '../index.less';
import { dynamic, useModel } from 'umi';
import SvgIcon from '@/components/svg/icon';
import {
  selectClassFuzzyDownList,
  getDepartment,
  getGradeList } from '@/services/class';
import ImportImg from '@/assets/person_picture/export.png';
import {person} from '@/services/config';


const Upload = dynamic({
  loader: async function () {
    const { default: Upload } = await import('rc-upload');
    return Upload;
  },
});

export default ({record, visible, roleId, baseForm,  handleModalVisible, customTable, roleList, dormitoryList}) => {

  const campus = JSON.parse(window.localStorage.getItem('campus'));
  const currentCampus = JSON.parse(window.localStorage.getItem('currentCampus'));
  let schoolId = '';
  let campusId = '';

  if (campus){
    schoolId = campus.schoolId;
  }
  if (currentCampus){
    campusId = currentCampus.campusId;
  }

  const [imgUrl1, setImgUrl1] = useState<string>(record.url);
  const [imgUrl2, setImgUrl2] = useState<string>(record.parentUrl1);
  const [imgUrl3, setImgUrl3] = useState<string>(record.parentUrl2);
  const [file1, setFile1] = useState<any>();
  const [file2, setFile2] = useState<any>();
  const [file3, setFile3] = useState<any>();
  const [selectRoleId, setSelectRoleId] = useState(0);
  const [filterClassList, setFilterClassList] = useState([]);
  const [isBoarder, setIsBoarder] = useState(0);
  const [isClickEdit, setIsClickEdit] = useState(false);
  const [errInfoList, setErrInfoList] = useState([]);
  const [errVisible, setErrVisible] = useState(false);
  useEffect(() => {

    roleId == 0 ? handleFormList(0) : handleFormList(roleId, record.type, record.station);
  }, []);

  const filterClass = (value:string,roleId:number) => {
    if (value.length >= 2){
      selectClassFuzzyDownList({className:value}).then(res=>{
        if (res.data){
          const list = res.data.map(item=>{
            const {classCode:key, className, gradeName, departmentName} = item;
            return {key, label:departmentName+gradeName+className};
          });

          if (roleId == 1){
            studentBoarderFormList.forEach(item=>item.name == 'classCode' ?  item.options = list : '');
            studentNotBoarderFormList.forEach(item=>item.name == 'classCode' ?  item.options = list : '');
          }else {
            headTeacherFormList.forEach(item=>item.name == 'classCode' ?  item.options = list : '');
          }

          console.log(list);
          setFilterClassList(list);
        }
      });
    }
  };

  //选择角色事件
  const modalRoleSelectChange = (role:any) => {
    setSelectRoleId(role);
    handleFormList(role,null,null);
  };

  //选择老师岗位
  const selectTeacherStation = (station:number) => {
    handleFormList(2,null,station);
  };
  //选择学生是否住宿
  const selectBoarder = (boarder:any) => {
    setIsBoarder(boarder);
    handleFormList(1,boarder,null);
  };

  //处理表单
  const handleFormList = (roleId:any, type?:any, station?:any) => {
     if (roleId == 1){

       if (record){

         studentBoarderFormList.forEach(item=>{
           if (item.name == 'classCode'){
             item.options = [{key:record.classCode, label:record.className}];
           }
         });

         studentNotBoarderFormList.forEach(item=>{
           if (item.name == 'classCode'){
             item.options = [{key:record.classCode, label:record.className}];
           }
         });
       }

       type == 1 ? setFormList(studentBoarderFormList) : setFormList(studentNotBoarderFormList);
     }else if(roleId == 2){

       if (record){
         if (record.classCode){
           headTeacherFormList.forEach(item=>{
             if (item.name == 'classCode'){
               item.options = [{key:record.classCode, label:record.className}];
             }
           });
         }
       }

       if (station == 6){
         setFormList(leaderFormList)
       }else if (station == 7){
         setFormList(headTeacherFormList)
       }else {
         setFormList(normalTeacherFormList)
       }
     }else if(roleId == 3){
       setFormList(logisticsFormList);
     }else {
       setFormList(baseFormInput);
     }
  };

  //基础表单
  const baseFormInput = [
    { name: 'name', label: '姓名', type: 'input',required:true },
    {
      name: 'sex',
      label: '性别',
      type: 'radio',
      options:[
        {key:'1',label:'男'},
        {key:'0',label:'女'},
      ],
      required:true
    },
    { name: 'ipNum', label: '身份证号', type: 'input',required:true },
    { name: 'phone', label: '手机号', type: 'input',required:true },
    {
      name:'roleId',
      label:'角色',
      type:'select',
      options:roleList,
      onChange:modalRoleSelectChange,
      required:true
    },
    { name: 'remark', label: '备注', type: 'textarea', className: styles.textarea},
  ];

  const [formList, setFormList] = useState(baseFormInput);

  //选择后勤
  const logisticsFormList = [
    { name: 'name', label: '姓名', type: 'input',required:true },
    {
      name: 'sex',
      label: '性别',
      type: 'radio',
      options:[
        {key:'1',label:'男'},
        {key:'0',label:'女'},
      ],
      required:true
    },
    { name: 'ipNum', label: '身份证号', type: 'input',required:true },
    { name: 'phone', label: '手机号', type: 'input',required:true },
    {
      name:'roleId',
      label:'角色',
      type:'select',
      options:roleList,
      onChange:modalRoleSelectChange,
      required:true,
      disabled:roleId != 0 ? true : false
    },
    {name:'code',label:'工号',type:'input'},
    { name: 'remark', label: '备注', type: 'textarea', className: styles.textarea},
  ];

  //选择老师-学校领导
  const leaderFormList = [
    { name: 'name', label: '姓名', type: 'input',required:true },
    {
      name: 'sex',
      label: '性别',
      type: 'radio',
      options:[
        {key:'1',label:'男'},
        {key:'0',label:'女'},
      ],
      required:true
    },
    { name: 'ipNum', label: '身份证号', type: 'input',required:true },
    { name: 'phone', label: '手机号', type: 'input',required:true },
    {
      name:'roleId',
      label:'角色',
      type:'select',
      options:roleList,
      onChange:modalRoleSelectChange,
      required:true,
      disabled:roleId != 0 ? true : false
    },
    {
      name:'station',
      label:'岗位',
      type: 'select',
      options:[
        {key:6,label: '学校领导'},
        {key:7,label: '班主任'},
        {key:0,label: '普通老师'},
      ],
      required:true,
      onChange:selectTeacherStation
    },
    {name:'code',label:'工号',type:'input'},
    { name: 'remark', label: '备注', type: 'textarea', className: styles.textarea},
  ];

  //选择老师-班主任
  const headTeacherFormList = [
    { name: 'name', label: '姓名', type: 'input',required:true },
    {
      name: 'sex',
      label: '性别',
      type: 'radio',
      options:[
        {key:'1',label:'男'},
        {key:'0',label:'女'},
      ],
      required:true
    },
    { name: 'ipNum', label: '身份证号', type: 'input',required:true },
    { name: 'phone', label: '手机号', type: 'input',required:true },
    {
      name:'roleId',
      label:'角色',
      type:'select',
      options:roleList,
      onChange:modalRoleSelectChange,
      required:true,
      disabled:roleId != 0 ? true : false
    },
    {
      name:'station',
      label:'岗位',
      type: 'select',
      options:[
        {key:6,label: '学校领导'},
        {key:7,label: '班主任'},
        {key:0,label: '普通老师'}
      ],
      required:true,
      onChange:selectTeacherStation
    },
    {
      name:'classCode',
      label:'所属班级',
      type: 'select',
      options:filterClassList,
      filterOption:true,
      onSearch:(value:any)=>filterClass(value,2),
      showSearch:true
    },
    {name:'code',label:'工号',type:'input'},
    { name: 'remark', label: '备注', type: 'textarea', className: styles.textarea},
  ];

  //选择老师-普通老师
  const normalTeacherFormList = [
    { name: 'name', label: '姓名', type: 'input',required:true },
    {
      name: 'sex',
      label: '性别',
      type: 'radio',
      options:[
        {key:'1',label:'男'},
        {key:'0',label:'女'},
      ],
      required:true
    },
    { name: 'ipNum', label: '身份证号', type: 'input',required:true },
    { name: 'phone', label: '手机号', type: 'input',required:true },
    {
      name:'roleId',
      label:'角色',
      type:'select',
      options:roleList,
      onChange:modalRoleSelectChange,
      required:true,
      disabled:roleId != 0 ? true : false
    },
    {
      name:'station',
      label:'岗位',
      type: 'select',
      options:[
        {key:6,label: '学校领导'},
        {key:7,label: '班主任'},
        {key:0,label: '普通老师'}
      ],
      required:true,
      onChange:selectTeacherStation
    },
    {name:'code',label:'工号',type:'input'},
    { name: 'remark', label: '备注', type: 'textarea', className: styles.textarea},
  ];

  //选择学生--住校
  const studentBoarderFormList = [
    { name: 'name', label: '姓名', type: 'input',required:true },
    {
      name: 'sex',
      label: '性别',
      type: 'radio',
      options:[
        {key:'1',label:'男'},
        {key:'0',label:'女'},
      ],
      required:true
    },
    { name: 'ipNum', label: '身份证号', type: 'input',required:true },
    { name: 'phone', label: '手机号', type: 'input',required:true },
    {
      name:'roleId',
      label:'角色',
      type:'select',
      options:roleList,
      onChange:modalRoleSelectChange,
      required:true,
      disabled:roleId != 0 ? true : false
    },
    {
      name:'classCode',
      label:'所在班级',
      type:'select',
      options:filterClassList,
      filterOption:true,
      onSearch:(value:any)=>filterClass(value,1),
      showSearch:true,
      required:true
    },
    {name:'code',label:'学号',type:'input',required:true},
    {
      name:'type',
      label:'是否住校',
      type:'select',
      options:[
        {key:1,label: '是'},
        {key:0,label: '否'},
      ],
      required:true,
      onChange:selectBoarder
    },
    {
      name:'dormitoryCode',
      label:'宿舍',
      type:'select',
      options: dormitoryList,
      required:true
    },
    { name:'parentName1', label:'监护人1', type:'input', required:true },
    { name:'relation1',label:'关系',type:'input', required:true},
    {name:'parentPhone1',label:'手机号',type:'input', required:true},
    {name:'parentName2',label:'监护人2',type:'input'},
    {name:'relation2',label:'关系',type:'input'},
    {name:'parentPhone2',label:'手机号',type:'input'},
    { name: 'remark', label: '备注', type: 'textarea', className: styles.textarea},
  ];

  //选择学生--非住校
  const studentNotBoarderFormList =  [
      { name: 'name', label: '姓名', type: 'input',required:true },
      {
        name: 'sex',
        label: '性别',
        type: 'radio',
        options:[
          {key:'1',label:'男'},
          {key:'0',label:'女'},
        ],
        required:true
      },
      { name: 'ipNum', label: '身份证号', type: 'input',required:true },
      { name: 'phone', label: '手机号', type: 'input',required:true },
      {
        name:'roleId',
        label:'角色',
        type:'select',
        options:roleList,
        onChange:modalRoleSelectChange,
        required:true,
        disabled:roleId != 0 ? true : false
      },
      {
        name:'classCode',
        label:'所在班级',
        type:'select',
        options:filterClassList,
        filterOption:true,
        onSearch:(value:any)=>filterClass(value,1),
        showSearch:true,
        required:true
      },
      {name:'code',label:'学号',type:'input',required:true},
      {
        name:'type',
        label:'是否住校',
        type:'select',
        options:[
          {key:1,label: '是'},
          {key:0,label: '否'},
        ],
        required:true,
        onChange:selectBoarder
      },
      { name:'parentName1', label:'监护人1', type:'input', required:true },
      { name:'relation1',label:'关系',type:'input', required:true},
      {name:'parentPhone1',label:'手机号',type:'input', required:true},
      {name:'parentName2',label:'监护人2',type:'input'},
      {name:'relation2',label:'关系',type:'input'},
      {name:'parentPhone2',label:'手机号',type:'input'},
      { name: 'remark', label: '备注', type: 'textarea', className: styles.textarea},
    ];

  let formProps = {
    hiddenFooter: true,
    initialValues:record,
    formList:formList
  };

  const onOk = () => {
    if (campus.campusId == null){
      message.info('非本校区无操作权限!');
      return;
    }
    const values = baseForm.current.getFormValues();
    const validValues = validData(values);
    if (!validValues) return;
    const formData = new FormData();
    Object.keys(values).forEach(key => values[key] ? formData.append(key, values[key]) : '');
    formData.append('campusId', campusId);
    formData.append('schoolId', schoolId);
    file1 ? formData.append('file1', file1) : '';

    if (imgUrl2 && imgUrl2.length > 0){
      file2 ? formData.append('file2', file2) : '';
    }
    if (imgUrl3 && imgUrl3.length > 0){
      file3 ? formData.append('file3', file3) : '';
    }
    console.log(formData);

    //新增角色
    if (roleId == 0){
      insertPerson(formData).then(res=>{
        if (res.data) {
          resetImgUrl();
          customTable.current.search({});
          handleModalVisible(false);
          message.success('新增成功',2);
        };
      });
    }
    //更新角色
    else {
      const {personId, parentId1,parentId2} = record;
      formData.append('personId', personId);
      parentId1 ? formData.append('parentId1', parentId1) : '';
      parentId2 ? formData.append('parentId2', parentId2) : '';
      updatePerson(formData).then(res=>{
        if (res.data){
          resetImgUrl();
          customTable.current.search({});
          handleModalVisible(false);
          message.success('更新成功',2);
        };
      });
    }
  };

  const validData = (data:object) => {

    if (!(data.name && data.ipNum && data.phone && data.roleId && (data.sex == 0 || data.sex == 1))){
      message.error('缺少必填信息',2);
      return false;
    }

    if (!(imgUrl1 && imgUrl1.length > 0)){
      message.error('请上传头像',2);
      return false;
    }

    //判断学生
    if (data.roleId == 1){
      if (data.classCode == '' || data.classCode == ' ' || data.classCode == null || data.classCode == undefined){
        message.error('缺少班级信息',2);
        return false;
      }
      if (!data.code){
        message.error('学号必填',2);
        return false;
      }
      if (data.type == '' || data.type == ' ' || data.type == null || data.type == undefined){
        message.error('是否住校必填',2);
        return false;
      }
      if (data.type == 1){
        if (data.dormitoryCode == '' || data.dormitoryCode == ' ' || data.dormitoryCode == null || data.dormitoryCode == undefined){
          message.error('缺少宿舍信息',2);
          return false;
        }
      }
      if (!(data.parentName1 && data.relation1 && data.parentPhone1)){
        message.error('监护人1信息不完整',2);
        return false;
      }
      if (!(imgUrl2 && imgUrl2.length > 0)){
        message.error('缺少监护人1头像',2);
        return false;
      }
    }
    else if (data.roleId == 2){
      if (data.station == undefined){
        message.error('岗位必填',2);
        return false;
      }
    }

    return true;
  };

  const uploadOption1 = {
    name: 'logo1',
    accept: 'image/*',
    headers: {
      token: localStorage.getItem('token'),
    },
    fileList: [],
    setImageUrl: (url,file) => {
      setImgUrl1(url);
      setFile1(file);
    },
  };

  const uploadOption2 = {
    name: 'logo2',
    accept: 'image/*',
    headers: {
      token: localStorage.getItem('token'),
    },
    fileList: [],
    setImageUrl: (url,file) => {
      setImgUrl2(url);
      setFile2(file);
    },
  };

  const uploadOption3 = {
    name: 'logo3',
    accept: 'image/*',
    headers: {
      token: localStorage.getItem('token'),
    },
    fileList: [],
    setImageUrl: (url,file) => {
      setImgUrl3(url);
      setFile3(file);
    },
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs:{span: 24 },
      sm:{span: 16 }
    }
  };

  const resetImgUrl = () => {
    setImgUrl1('');
    setImgUrl2('');
    setImgUrl3('');
  };

  const batchImportFailed = () => {
    message.success('上传失败!');
  };

  const batchImportSuccess = () => {
    message.success('上传成功!');
    handleModalVisible(false);
  };

  const batchImportProps = {
    action:`${person}/excel/importPerson`,
    name: 'file',
    accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
    headers: {
      token: localStorage.getItem('token'),
    },
    data:{
      schoolId,
      campusId
    },
    onSuccess:(res) => {
      const errList = [];
      const {studentFailList, teacherFailList, workerFailList} = res.data;

      (studentFailList || []).map(item=>{errList.push(item)});
      (teacherFailList || []).map(item=>{errList.push(item)});
      (workerFailList || []).map(item=>{errList.push(item)});

      setErrInfoList(errList);
      setErrVisible(true);
    },
    onError:(res) => {
      message.error('导入失败');
    }
  };

  return (
    <Modal
      title={roleId == 0 ? '新增人员信息' : '修改人员信息'}
      className={styles.infoModal}
      visible={visible}
      okText={roleId == 0 ? '添加' : '保存'}
      cancelText='取消'
      onCancel={() => {
        handleModalVisible(false);
        resetImgUrl();
        setIsClickEdit(false);
      }}
      onOk={onOk}
      closable={false}
    >
      { roleId == 0
        ? campus.campusId == null ? '' :
          <Upload {...batchImportProps}>
            <img src={ImportImg}/>
        </Upload>
        : <SvgIcon
          tipTitle='编辑'
          name='update'
          width={30}
          height={30}
          color="rgb(56, 220, 255)"
          className={styles.editImg}
          onClick={() => {setIsClickEdit(true)}}
        />}
      { roleId == 0
        ? ''
        :
        <div className={styles.masker_layout}
             style={isClickEdit == false ? { visibility: 'visible', cursor: 'not-allowed' } : { visibility: 'hidden' }}></div>
      }
      <div className={styles.updateBox}>
        <div className={styles.leftUpdate}>
          <div className={styles.studentUpload}>
            <div className={imgUrl1 ? styles.Upload : styles.watermark}>
              <img
                width="100%"
                height="100%"
                src={imgUrl1}
                alt=""
                draggable={false}
              />
            </div>
            <Upload1 {...uploadOption1}>
              <Button className={styles.btnUpload}>上传照片</Button>
              <p className={styles.tips}>（请上传本人正面头像照片）</p>
            </Upload1>
          </div>
          { selectRoleId == 1 || roleId == 1 ? <div className={styles.guardianUpload}>
            <div className={styles.guardianItem}>
              <div className={imgUrl2 ? styles.Upload : styles.watermark}>
                <img
                  width="100%"
                  height="100%"
                  src={imgUrl2}
                  alt=""
                  draggable={false}
                />
              </div>
              <Upload1 {...uploadOption2}>
                <Button className={styles.btnUpload}>上传照片</Button>
                <p className={styles.tips}>（监护人1）</p>
              </Upload1>
            </div>
            <div className={styles.guardianItem}>
              <div className={imgUrl3 ? styles.Upload : styles.watermark}>
                <img
                  width="100%"
                  height="100%"
                  src={imgUrl3}
                  alt=""
                  draggable={false}
                />
              </div>
              <Upload1 {...uploadOption3}>
                <Button className={styles.btnUpload}>上传照片</Button>
                <p className={styles.tips}>（监护人2）</p>
              </Upload1>
            </div>
          </div>  : ''}
        </div>
        <div className={styles.rightForm}>
          <BaseForm
            ref={baseForm}
            formItemLayout={formItemLayout}
            {...formProps}
          />
        </div>
      </div>

      <Modal
        title='错误信息列表'
        className={styles.errModal}
        visible={errVisible}
        okText='确认'
        cancelText='关闭'
        onCancel={() => {setErrVisible(false)}}
        onOk={() => {setErrVisible(false)}}
        closable={false}
      >
        {
          errInfoList.length > 0
            ?
          (errInfoList || []).map((item,index)=>{
            return(
              <span className={styles.errItem} key={index}>{item}</span>
            )
          })
            :
            <span>上传成功</span>
        }
      </Modal>
    </Modal>
  )
};
