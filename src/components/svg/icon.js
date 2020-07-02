import React from 'react';
import { Tooltip } from 'antd';
const config = {
    user: "M512 512C371.2 512 256 396.8 256 256s115.2-256 256-256 256 115.2 256 256-115.2 256-256 256z m0-448C403.2 64 320 147.2 320 256s83.2 192 192 192 192-83.2 192-192-83.2-192-192-192zM960 1024h-64v-128c0-140.8-115.2-256-256-256H384c-140.8 0-256 115.2-256 256v128H64v-128c0-179.2 140.8-320 320-320h256c179.2 0 320 140.8 320 320v128z",
    exit: "M503.0584599 511.18291546a30.93379157 30.93379157 0 0 1-31.51347171-30.248716V120.53181037C471.54498819 103.77381064 485.66808273 90.125 503.0584599 90.125c17.44307528 0 31.61886712 13.70150876 31.61886713 30.40681036v360.24429474a30.98648968 30.98648968 0 0 1-31.56616901 30.40681036zM493.5727991 933.29479416a409.83321753 409.83321753 0 0 1-285.09678616-113.93331839A387.64731308 387.64731308 0 0 1 122.05110913 695.73170411a376.89689822 376.89689822 0 0 1 14.49198057-331.89270942A398.13423733 398.13423733 0 0 1 259.22429519 228.1940541a32.30394269 32.30394269 0 0 1 44.05562101 7.06154646 29.61633938 29.61633938 0 0 1-7.37773517 42.31658386 336.53014399 336.53014399 0 0 0-103.49909226 114.56569583 313.8172575 313.8172575 0 0 0-38.94390499 152.08675158c0 87.68965869 35.41313095 170.10950619 99.70482843 232.08248558a344.22406869 344.22406869 0 0 0 240.51418313 96.12135707 344.43486035 344.43486035 0 0 0 240.51418396-96.06865896 320.19372922 320.19372922 0 0 0 99.5994322-232.13518369 313.5537669 313.5537669 0 0 0-38.83850877-152.08675158 336.21395527 336.21395527 0 0 0-103.65718662-114.46029959 29.61633938 29.61633938 0 0 1-7.74662283-41.73690454l0.5269812-0.63237744a32.25124457 32.25124457 0 0 1 44.00292372-7.06154646 397.60725613 397.60725613 0 0 1 122.62850738 135.59224246 376.52801138 376.52801138 0 0 1 14.54467868 331.89270942 387.12033188 387.12033188 0 0 1-86.42490381 123.68246978 403.66753912 403.66753912 0 0 1-128.16180917 83.36841284A414.83953894 414.83953894 0 0 1 493.5727991 933.29479416z",
    //new
    update: "M840.268442 529.277502l0 259.159458c0 28.579919-23.251563 51.831482-51.831482 51.831482L235.56304 840.268442c-28.579919 0-51.831482-23.252587-51.831482-51.831482L183.731558 235.56304c0-28.580942 23.252587-51.831482 51.831482-51.831482l276.43696 0 0-34.555004c-141.105738 0-276.43696 0-276.43696 0-47.709605 0-86.386486 38.674834-86.386486 86.386486l0 552.873919c0 47.709605 38.676881 86.386486 86.386486 86.386486l552.873919 0c47.710628 0 86.386486-38.676881 86.386486-86.386486 0 0 0-123.322723 0-259.159458l-0.343831-0.360204L840.268442 529.277502zM846.646626 237.488512l-354.401433 354.401433-60.607769-60.607769 354.401433-354.401433 60.607769 60.607769ZM379.594411 643.927705 479.007585 605.123934 418.399205 544.515554ZM862.172311 161.827689c-16.868179-16.868179-44.216038-16.868179-61.084217 0l61.084217 61.084217C879.040491 206.043726 879.040491 178.695868 862.172311 161.827689z",
    detail: [
        "M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m0-960C265.6 64 64 265.6 64 512s201.6 448 448 448 448-201.6 448-448S758.4 64 512 64z",
        "M512 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z",
        "M768 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z",
        "M256 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
    ],
    passAudit: [
        "M806.186667 678.186667l-135.893334 135.893333-91.733333-73.386667a21.333333 21.333333 0 0 0-26.666667 33.28l106.666667 85.333334a21.333333 21.333333 0 0 0 28.373333-1.493334l149.333334-149.333333a21.333333 21.333333 0 0 0-30.08-30.293333z",
        "M693.333333 501.333333a256 256 0 1 0 256 256 256 256 0 0 0-256-256z m0 469.333334a213.333333 213.333333 0 1 1 213.333334-213.333334 213.333333 213.333333 0 0 1-213.333334 213.333334z",
        "M245.333333 738.773333a21.333333 21.333333 0 0 0 0 42.666667h106.666667a21.333333 21.333333 0 0 0 0-42.666667h-106.666667zM416 610.773333a21.333333 21.333333 0 0 0-21.333333-21.333333h-149.333334a21.333333 21.333333 0 0 0 0 42.666667h149.333334a21.333333 21.333333 0 0 0 21.333333-21.333334zM629.333333 461.44a21.333333 21.333333 0 0 0-21.333333-21.333333h-362.666667a21.333333 21.333333 0 0 0 0 42.666666h362.666667a21.333333 21.333333 0 0 0 21.333333-21.333333z",
        "M458.666667 930.773333h-256a85.333333 85.333333 0 0 1-82.56-88.106666V333.44h768v208.853333a21.333333 21.333333 0 1 0 42.666666 0V202.666667a128 128 0 0 0-130.773333-125.226667h-82.56V32a21.333333 21.333333 0 0 0-42.666667 0v45.44h-341.333333V32a21.333333 21.333333 0 0 0-42.666667 0v45.44H202.666667A123.733333 123.733333 0 0 0 77.44 202.666667v640a128 128 0 0 0 125.226667 130.773333h256a21.333333 21.333333 0 0 0 0-42.666667z m-256-810.666666h88.106666v18.56a21.333333 21.333333 0 0 0 42.666667 0v-18.56h341.333333v18.56a21.333333 21.333333 0 0 0 42.666667 0v-18.56h82.56a85.333333 85.333333 0 0 1 88.106667 82.56v88.106666h-768V202.666667A80.853333 80.853333 0 0 1 202.666667 120.106667z",
    ],
    refuseAudit: [
        "M793.813333 656.853333a21.333333 21.333333 0 0 0-30.08 0l-70.4 70.4-70.186666-70.186666a21.333333 21.333333 0 0 0-30.08 30.08l70.186666 70.186666-70.186666 70.186667a21.333333 21.333333 0 1 0 30.08 30.08l70.186666-70.186667 70.186667 70.186667a21.333333 21.333333 0 0 0 30.08-30.08l-70.186667-70.186667 70.186667-70.186666a21.333333 21.333333 0 0 0 0.213333-30.293334z",
        "M693.333333 501.333333a256 256 0 1 0 256 256 256 256 0 0 0-256-256z m0 469.333334a213.333333 213.333333 0 1 1 213.333334-213.333334 213.333333 213.333333 0 0 1-213.333334 213.333334z",
        "M245.333333 738.773333a21.333333 21.333333 0 0 0 0 42.666667h106.666667a21.333333 21.333333 0 0 0 0-42.666667h-106.666667zM416 610.773333a21.333333 21.333333 0 0 0-21.333333-21.333333h-149.333334a21.333333 21.333333 0 0 0 0 42.666667h149.333334a21.333333 21.333333 0 0 0 21.333333-21.333334zM629.333333 461.44a21.333333 21.333333 0 0 0-21.333333-21.333333h-362.666667a21.333333 21.333333 0 0 0 0 42.666666h362.666667a21.333333 21.333333 0 0 0 21.333333-21.333333z",
        "M458.666667 930.773333h-256a85.333333 85.333333 0 0 1-82.56-88.106666V333.44h768v208.853333a21.333333 21.333333 0 1 0 42.666666 0V202.666667a128 128 0 0 0-130.773333-125.226667h-82.56V32a21.333333 21.333333 0 0 0-42.666667 0v45.44h-341.333333V32a21.333333 21.333333 0 0 0-42.666667 0v45.44H202.666667A123.733333 123.733333 0 0 0 77.44 202.666667v640a128 128 0 0 0 125.226667 130.773333h256a21.333333 21.333333 0 0 0 0-42.666667zM120.106667 202.666667A80.853333 80.853333 0 0 1 202.666667 120.106667h88.106666v18.56a21.333333 21.333333 0 0 0 42.666667 0v-18.56h341.333333v18.56a21.333333 21.333333 0 0 0 42.666667 0v-18.56h82.56a85.333333 85.333333 0 0 1 88.106667 82.56v88.106666h-768V202.666667z",
    ],
    arrowLeft: "M324.211517 511.805631 787.889594 73.082583c16.19422-16.630365 16.19422-43.974704 0-60.605068-16.19422-16.630365-42.495607-16.630365-58.613976 0L235.750113 479.360302c-8.647031 8.969398-12.344775 20.934917-11.719003 32.445329-0.644735 11.90863 3.071972 23.874149 11.719003 32.824585l493.506542 466.882788c16.118369 16.649327 42.438718 16.649327 58.613976 0 16.19422-17.085471 16.19422-43.974704 0-60.605068L324.211517 511.805631",
    arrowRight: "M801.548285 510.271032L301.254151 1010.360574c-18.242732 18.242732-47.73799 18.106338-65.844327-0.306887a47.226511 47.226511 0 0 1 0.272788-66.389904l433.358652-433.154061L235.784908 80.356335A47.192413 47.192413 0 0 1 235.307528 13.966431 46.30585 46.30585 0 0 1 301.151856 13.454952l500.396429 496.81608z",
    location: [
        "M927.282215 479.83544l-83.4629 0c-15.068184-158.75777-141.389194-285.078781-300.146964-300.146964L543.67235 95.835695c0-17.622356-14.285355-31.907711-31.907711-31.907711-17.622356 0-31.907711 14.285355-31.907711 31.907711l0 83.85278c-158.75777 15.068184-285.078781 141.389194-300.146964 300.146964l-83.826174 0c-17.622356 0-31.907711 14.285355-31.907711 31.907711 0 17.622356 14.285355 31.907711 31.907711 31.907711l83.826174 0c15.068184 158.75777 141.389194 285.078781 300.146964 300.146964l0 83.946924c0 17.622356 14.285355 31.907711 31.907711 31.907711 17.622356 0 31.907711-14.285355 31.907711-31.907711l0-83.946924c158.75777-15.068184 285.078781-141.389194 300.146964-300.146964l83.4629 0c17.622356 0 31.907711-14.285355 31.907711-31.907711C959.189925 494.120794 944.904571 479.83544 927.282215 479.83544zM511.76464 793.112446c-155.396209 0-281.369296-125.973086-281.369296-281.369296s125.973086-281.369296 281.369296-281.369296 281.369296 125.973086 281.369296 281.369296S667.159826 793.112446 511.76464 793.112446z",
        "M511.76464 511.74315m-69.616544 0a68.031 68.031 0 1 0 139.233088 0 68.031 68.031 0 1 0-139.233088 0Z"
    ],
    // old
    lock: "M512 36.571429c166.034286 0 301.714286 123.611429 301.714286 275.821714l1.974857 61.366857h31.232c37.083429 0 67.364571 27.794286 67.364571 61.293714l-0.950857 459.702857c0 33.572571-30.281143 61.293714-67.364571 61.293715H177.005714c-37.083429 0-67.364571-27.794286-67.364571-61.293715V435.053714c0-33.572571 30.281143-61.293714 67.364571-61.293714h35.108572l-1.901715-61.366857C210.285714 160.182857 345.014857 36.571429 512 36.571429z m0 490.422857c-55.588571 0-100.571429 41.179429-100.571429 91.940571 0 33.499429 20.48 63.195429 49.737143 79.506286v87.113143c0 26.843429 22.528 47.908571 50.834286 47.908571 27.355429 0 49.737143-21.065143 49.737143-47.908571V698.514286c30.354286-16.310857 49.883429-45.056 49.883428-79.506286C612.571429 568.173714 567.588571 526.994286 512 526.994286z m0-398.482286c-111.323429 0-201.142857 82.358857-201.142857 183.881143v61.366857h401.334857V312.32c0-101.522286-89.819429-183.881143-200.192-183.881143z",
    close: "M575.4368 512l333.5168-333.6704a43.7248 43.7248 0 0 0 0-61.44l-1.792-1.8432a43.6736 43.6736 0 0 0-61.44 0l-333.568 334.1312L178.688 115.0464a43.6736 43.6736 0 0 0-61.44 0l-1.8432 1.792a42.9056 42.9056 0 0 0 0 61.44L448.9216 512l-333.568 333.6704a43.7248 43.7248 0 0 0 0 61.44l1.8432 1.8432a43.6736 43.6736 0 0 0 61.44 0l333.5168-333.6704 333.568 333.6704a43.6736 43.6736 0 0 0 61.44 0l1.792-1.792a43.7248 43.7248 0 0 0 0-61.44L575.488 512z",
    enlarge: "M962 62H596.375L737 202.625l-168.75 168.75 84.375 84.375L821.375 287 962 427.625zM962 962V596.375L821.375 737l-168.75-168.75-84.375 84.375L737 821.375 596.375 962zM62 962h365.625L287 821.375l168.75-168.75-84.375-84.375L202.625 737 62 596.375zM62 62v365.625L202.625 287l168.75 168.75 84.375-84.375L287 202.625 427.625 62z",
    switch: "M448 832v64L319.68 768 448 640v64h192a192 192 0 0 0 115.84-345.152l0.704-0.896 90.24-90.24A320 320 0 0 1 640 832l-192.064 0.064z m128-640v-64l131.008 128L576 384v-64H384a192 192 0 0 0-115.712 345.216l-91.072 91.008A320 320 0 0 1 384 192h192.064z",
    switch_1: "M880 474.666667h-736a26.656 26.656 0 0 1-16.661333-47.488l160-128a26.666667 26.666667 0 1 1 33.312 41.653333L220.021333 421.333333H880a26.666667 26.666667 0 1 1 0 53.333334zM720.021333 752a26.666667 26.666667 0 0 1-16.672-47.488l100.64-80.512H144a26.666667 26.666667 0 1 1 0-53.333333h736a26.666667 26.666667 0 0 1 16.650667 47.488l-160 128a26.506667 26.506667 0 0 1-16.629334 5.845333z",
    add_circle: "M510.45511156 887.39022219c-206.76444469 0-374.38044469-167.64977812-374.38044468-374.44088906S303.69066688 138.52088844 510.45511156 138.52088844c206.7662222 0 374.38222219 167.63733375 374.38222219 374.42844468S717.22133375 887.39022219 510.45511156 887.39022219zM510.45511156 185.32266687c-180.92088844 0-327.58222219 146.68266657-327.58222219 327.62666625S329.53422219 840.57777781 510.45511156 840.57777781s327.58222219-146.68444406 327.58222218-327.62844469S691.376 185.32266687 510.45511156 185.32266687zM650.84799969 536.35555532L533.85600031 536.35555532l0 117.00977812c0 12.91733344-10.47644437 23.39733375-23.39911126 23.39733376-12.92266688 0-23.39733375-10.48000031-23.39733374-23.39733376l0-117.00977812-116.99555531-1e-8c-12.92266688 0-23.39911125-10.47822188-23.39911125-23.40622219 0-12.91911094 10.47822188-23.39733375 23.39911125-23.39733374l116.99555531 0 0-117.01511157c0-12.91733344 10.47644437-23.39200031 23.39733374-23.39200031 12.92444438 0 23.39911125 10.47288845 23.39911126 23.39200031l0 117.01511157 116.99200031 0c12.92444438 0 23.39911125 10.47822188 23.39911126 23.39733374C674.24711095 525.87733344 663.77244406 536.35555532 650.84799969 536.35555532z",
    save: [
        "M669.318 369.122L448.9 589.542l-97.842-97.863c-14.148-14.149-37.107-14.149-51.211 0-14.193 14.148-14.193 37.108 0 51.233l123.469 123.492c7.074 7.075 16.328 10.635 25.584 10.635 9.255 0 18.554-3.56 25.628-10.635l246.048-246.027c14.15-14.148 14.15-37.085 0-51.256-14.149-14.148-37.107-14.125-51.258 0.001z m0 0",
        "M510.167 1018.925c-279.24 0-501.175-221.932-501.175-501.173 0-279.24 221.934-501.174 501.175-501.174 279.24 0 501.175 221.933 501.175 501.174s-221.935 501.173-501.175 501.173z m0-945.039c-243.424 0-436.746 200.443-436.746 436.703s200.487 436.748 436.746 436.748c236.26 0 436.746-200.488 436.746-436.748S753.59 73.886 510.167 73.886z",
    ],
    cancel_circle: "M512 872c-198.823 0-360-161.177-360-360s161.177-360 360-360 360 161.177 360 360-161.177 360-360 360z m0-416.569l-84.853-84.852c-15.62-15.621-40.947-15.621-56.568 0-15.621 15.62-15.621 40.947 0 56.568L455.43 512l-84.852 84.853c-15.621 15.62-15.621 40.947 0 56.568 15.62 15.621 40.947 15.621 56.568 0L512 568.57l84.853 84.852c15.62 15.621 40.947 15.621 56.568 0 15.621-15.62 15.621-40.947 0-56.568L568.57 512l84.852-84.853c15.621-15.62 15.621-40.947 0-56.568-15.62-15.621-40.947-15.621-56.568 0L512 455.43z",
    update_circle_pen: "M876.9 388.3c-23.5 0-42.6 19.1-42.6 42.6h-0.1v361.6c0 41.6-33.8 75.4-75.4 75.4H227.2c-41.6 0-75.4-33.8-75.4-75.4V261.1c0-41.6 33.8-75.4 75.4-75.4H589c23.5 0 42.6-19.1 42.6-42.6s-19.1-42.6-42.6-42.6H227.2c-88.7 0-160.7 72-160.7 160.7v531.6c0 88.7 72 160.7 160.7 160.7h531.6c88.7 0 160.7-72 160.7-160.7V430.9c0-23.5-19.1-42.6-42.6-42.6z m61.5-304.6c-22.2-22.2-58.2-22.2-80.4 0l-80.4 80.4 80.4 80.4 80.4-80.4c22.2-22.2 22.2-58.2 0-80.4zM234.7 787.4l120.6-40.2 462.5-462.5-80.4-80.4-462.5 462.5-40.2 120.6z",
    update_account: [
        "M256 777.216L480.256 696.32l-131.072-131.584zM878.592 300.544L747.52 168.96l-374.272 372.224 131.072 131.584zM957.44 158.72l-67.584-68.096c-17.408-17.408-47.104-16.384-66.048 2.048L773.12 143.36l131.072 131.584 51.2-50.688c18.944-18.432 19.968-48.128 2.048-65.536z",
        "M805.888 946.176H166.912c-45.568 0-82.432-36.864-82.432-82.432V224.256c0-45.568 36.864-82.432 82.432-82.432H552.96v71.68H166.912c-5.632 0-10.752 5.12-10.752 10.752v638.976c0 5.632 5.12 10.752 10.752 10.752h638.976c5.632 0 10.752-5.12 10.752-10.752V459.264h71.68v403.968c0 45.568-36.864 82.944-82.432 82.944z"
    ],
    update_1: [
        "M860 504c-19.9 0-36 16.1-36 36 0 1.4 0.1 2.7 0.2 4h-0.2v344H136V200h376c19.9 0 36-16.1 36-36s-16.1-36-36-36H136c-39.8 0-72 32.2-72 72v688c0 39.8 32.2 72 72 72h688c39.8 0 72-32.2 72-72V544h-0.2c0.1-1.3 0.2-2.6 0.2-4 0-19.9-16.1-36-36-36z",
        "M1002.7 100.3L923.4 21c-28.1-28.1-73.9-27.9-102 0.2L424.2 418.4c-2.9 2.9-5.2 6.4-6.8 10.2L317.6 664c-5.6 13.2-1.7 26.5 6.8 35.1 8.5 8.6 21.9 12.5 35.2 6.9l235.5-99.7c3.8-1.6 7.2-3.9 10.2-6.8l397.2-397.2c28.1-28.1 28.3-73.9 0.2-102zM559.8 543l-137.4 58.2 58.2-137.4L759.4 185l79.2 79.2L559.8 543z m391.7-391.7l-62 62-79.2-79.2 62-62 0.2-0.2 79.2 79.2-0.2 0.2z"
    ],
    // 圆
    circular: [
        "M 295.268 506.734 c 0 0.00406349 0 0.0182857 0 0.0233651 c 0 186.58 151.254 337.838 337.838 337.838 c 186.58 0 337.838 -151.254 337.838 -337.838 c 0 -0.00507937 0 -0.0193015 0 -0.0233651 c 0 -0.00304762 0 -0.01727 0 -0.0223492 c 0 -186.58 -151.254 -337.838 -337.838 -337.838 c -186.58 0 -337.838 151.254 -337.838 337.838 c 0 0.00507937 0 0.0193015 0 0.023365 Z",
        "M 296.321 503.728 c 0 185.604 150.46 336.066 336.066 336.066 s 336.066 -150.46 336.066 -336.066 c 0 0 0 0 0 0 c 0 -185.604 -150.46 -336.066 -336.066 -336.066 c -185.604 0 -336.066 150.46 -336.066 336.066 c 0 0 0 0 0 0 Z"
    ],
    delete: "M733.696 792.064c0 26.624-21.504 48.128-48.128 48.128H338.432c-26.624 0-48.128-21.504-48.128-48.128v-512h443.904v512h-0.512zM386.56 193.536c0-5.632 4.096-9.728 9.728-9.728h231.936c5.632 0 9.728 4.096 9.728 9.728v29.184H386.56v-29.184z m492.032 29.184h-182.784v-29.184c0-36.864-30.208-67.584-67.584-67.584H396.288c-36.864 0-67.584 30.208-67.584 67.584v29.184H145.408c-15.872 0-29.184 12.8-29.184 29.184 0 15.872 12.8 29.184 29.184 29.184h86.528v510.976c0 58.88 47.616 106.496 106.496 106.496h347.136c58.88 0 106.496-47.616 106.496-106.496v-512h86.528c15.872 0 29.184-12.8 29.184-29.184s-13.312-28.16-29.184-28.16zM512 753.152c15.872 0 29.184-12.8 29.184-29.184V415.232c0-15.872-12.8-29.184-29.184-29.184-15.872 0-29.184 12.8-29.184 29.184v308.736c0 15.872 13.312 29.184 29.184 29.184m-135.168 0c15.872 0 29.184-12.8 29.184-29.184V415.232c0-15.872-12.8-29.184-29.184-29.184-15.872 0-29.184 12.8-29.184 29.184v308.736c0.512 15.872 13.312 29.184 29.184 29.184m270.336 0c15.872 0 29.184-12.8 29.184-29.184V415.232c0-15.872-12.8-29.184-29.184-29.184-15.872 0-29.184 12.8-29.184 29.184v308.736c0.512 15.872 13.312 29.184 29.184 29.184",
    delete_1: "M482.333842 317.484841c0-17.637706 14.435781-31.840172 31.807427-31.840172l0 0c17.3389 0 31.775704 14.450107 31.775704 31.840172L545.916972 800.351314c0 17.637706-14.435781 31.809473-31.775704 31.809473l0 0c-17.619286 0-31.807427-14.418384-31.807427-31.809473L482.333842 317.484841zM927.372777 195.599863l0-5.507434c-1.390673-16.338107-14.989389-29.086455-31.682583-29.086455l0 0L724.730521 161.005974l0-40.164768c0-31.098275-27.882024-55.573713-63.612807-55.573713l-294.231231 0c-35.700083 0-63.611783 24.475438-63.611783 55.573713l0 39.916105L127.181099 160.757311c-17.618263 0-31.806403 14.202467-31.806403 31.840172s14.187117 31.840172 31.806403 31.840172l67.01223 0 0 671.403476c0 34.284851 28.622898 62.195527 63.582107 62.195527l512.947582 0c34.958186 0 63.582107-27.910677 63.582107-62.195527l0-671.155836 61.385069 0C912.383388 224.687342 925.982104 211.93797 927.372777 195.599863L927.372777 195.599863zM332.390831 317.484841c0-17.637706 14.187117-31.840172 31.806403-31.840172l0 0c17.618263 0 31.774681 14.450107 31.774681 31.840172L395.971915 800.351314c0 17.637706-14.404058 31.809473-31.774681 31.809473l0 0c-17.619286 0-31.806403-14.418384-31.806403-31.809473L332.390831 317.484841zM632.030236 317.484841c0-17.637706 14.434757-31.840172 31.806403-31.840172l0 0c17.588587 0 31.775704 14.450107 31.775704 31.840172L695.612343 800.351314c0 17.637706-14.433734 31.809473-31.775704 31.809473l0 0c-17.371646 0-31.806403-14.418384-31.806403-31.809473L632.030236 317.484841zM366.88546 129.165802l294.231231 0 0 31.840172-294.231231 0L366.88546 129.165802zM736.969263 894.604978c0 0-411.4397 1.485841-446.39891 1.485841-34.988886 0-33.010835-35.987632-33.010835-35.987632L257.559519 255.289314c0-36.729529 31.064506-30.601972 31.064506-30.601972l444.420859 0c0 0 37.432541-2.227738 37.432541 30.601972 0 32.800034 0.494257 577.12116 0.494257 607.970772C770.970658 893.892757 736.969263 894.604978 736.969263 894.604978L736.969263 894.604978z",
    add: "M927.878 467.618h-377.118v-365.861c0-16.8859-16.8859-39.4004-39.4004-39.4004-22.5145 0-39.4004 22.5145-39.40040001 45.029v365.861H106.097c-22.5145-5.62863001-45.029 16.8859-45.02900001 39.4004s22.5145 39.4004 39.40040001 39.4004h365.861v365.861c5.62863001 22.5145 22.5145 45.029 45.029 45.029s39.4004-22.5145 39.4004-39.4004v-371.49h371.49000001c22.5145 0 39.4004-22.5145 39.40039999-39.4004s-11.2573-45.029-33.7718-45.029Z",
    position: "M628.696 885.045v0.067a26.97 26.97 0 0 1 1.542 8.811c0 30.545-52.993 55.308-118.274 55.308-65.21 0-118.203-24.762-118.203-55.308 0-3.024 0.512-5.979 1.544-8.878-71.585 12.736-119.751 36.659-119.751 64.186 0 40.837 105.856 73.77 236.41 73.77 130.557 0 236.482-32.933 236.482-73.77-0.068-27.527-48.238-51.45-119.75-64.186zM845.654 326.49C845.654 146.708 696.259 1 512.002 1 327.71 1 178.346 146.708 178.346 326.49c0 179.747 333.656 555.478 333.656 555.478S845.654 506.236 845.654 326.49z m-463.767-8.385c0-70.099 58.284-126.918 130.115-126.918 71.854 0 130.099 56.819 130.099 126.918 0 70.095-58.245 126.915-130.099 126.915-71.831-0.001-130.115-56.821-130.115-126.915z",
};
export default ({ color = 'black', name, className = "svgIcon", tipTitle = "", onClick, width = 24, height = 24 }) => {
    return (React.createElement(Tooltip, { title: tipTitle },
        React.createElement("svg", { style: { cursor: 'pointer' }, onClick: onClick, width: width, height: height, className: className, viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, Array.isArray(config[name]) ?
            config[name].map((item, index) => (React.createElement("path", { key: index, d: item, fill: color, stroke: color })))
            :
                React.createElement("path", { d: config[name], fill: color, stroke: color }))));
};
//# sourceMappingURL=icon.js.map