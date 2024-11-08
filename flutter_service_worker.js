'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1e4c6ce55f9456b505ceaaa9626f0c7b",
"version.json": "b872e1a7940d7a8bc2c87a2fcb0edb40",
"index.html": "b67fbca772cff5a9075bd058b99a20c4",
"/": "b67fbca772cff5a9075bd058b99a20c4",
"main.dart.js": "5b92c6cc492403a745b40bc1b73cad60",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8e3397b78f793fd1246f7390b0b0a8c4",
".git/config": "36c98a6a8932e8fc93dc99b1aa3989b1",
".git/objects/95/18fe73c9bfeb64dac626f9a6d214db83e85cdd": "ff38846d2ff358745d623e4fc5c2d21e",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "4643131532bd21681468718600b3fdcf",
".git/objects/6f/a7a352313e0ad465ac753a7d41074a4c5c1f93": "def11050f47bf2ffcf6eb3ce11a7ec50",
".git/objects/03/6d3c05f5b9a4a53bbfc14bf8c307deb81f23ee": "a5f7f7d21eb659e85d712c8eddcbab8f",
".git/objects/9e/28cb985f016d72bf66f1314fbe2a20898214e9": "561488b1329a4b5b6bfc7545963b9ca8",
".git/objects/04/674e9327f475911fa353425744e7a8e3633e7c": "947c2a2367a6bd9080c05981c2a68fa2",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "a5ab4a345a37d6f24f2325aa56fbd1ef",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "8ce1416c1fb5ba13f5b97c6c1001b888",
".git/objects/3d/1b0ef2b8075736f0effbc01d8494728fbef989": "a65557efb97e1c45bf31cd53fce99bcb",
".git/objects/58/4e611aa39c5bc0b87a35345208d5efbabe45c7": "2980b228a86b8bbdeda5d4254a23d1fe",
".git/objects/58/dacc6409f7817b6c88ac6082960e85fe5b3b13": "fecca7f637ed60c1c67b50ae1d395daf",
".git/objects/58/5c45ecccfec46957f4e7d8d850213abc1e113a": "dfba9584c4e980081eef8ef964730f53",
".git/objects/0b/ae875061391606f8484369ba1e4a59e8833db4": "6c9299d3ded2cea475b3864b220b6550",
".git/objects/93/c4fa82db843c52f2833d04c5da8a86e32e2693": "cad5def3ea75676f760e1b70a86762a8",
".git/objects/94/afe450e1b31abc6cc6148e356122c6238d3d27": "e60a7a478126f72ed8d05d616bd8bb46",
".git/objects/0e/e5b9539d4d03c88df8a0eda48cd63be36c0115": "ec52d09a2733f0f479ab76bbd6445afd",
".git/objects/5a/931a54886e39e4b36283f90ddad26df7b00fab": "4d28436c3f067952c5ae3526c9c4f859",
".git/objects/05/5143a62713da224c5ef71da13e675385ba1078": "01b4c6a06b0a8418246cf8608c0f9bfd",
".git/objects/a4/028c0e8e04bff3f8e838af373e4281ebe69f31": "b0e54f669e04de0156e1a4e596436320",
".git/objects/b5/20f3169022f3d65c7e112fb45e71331201c0ef": "37908aeec83bc2945d3b21f04b16b9e6",
".git/objects/d9/e64b60a52f060661cc60bb7822661a34c55c58": "b61c7503c3b7db04e18f37eb1002c3cb",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "6dd3aa7909b7bea70e523e4a9c9861cc",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "4f6d7d5a9dcde6a00e4fa30f4bc76179",
".git/objects/a5/03d35b1147acd52efb42a70facda1cf5c8ca17": "dcb15375cfed1bf176c43d74f6bcef25",
".git/objects/bd/8b0efba91673b2d33e7e63124d20fd688e460f": "da74bf65cd6672361cbcc1808f41728c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "56811284fc21250e82c0c2d61606602e",
".git/objects/ae/0bd6f50139151f4cae80638548499321d7d9e7": "3d8f234861dd6d377bb468f055366137",
".git/objects/ab/35c6ecc3f29a7f735da7baeb500a493d2a8d36": "8b79d86a6e1164fff6362b686d30237d",
".git/objects/e5/2dc3d0ad7bf042762218166b533a7c05c3b7de": "59048b837a13bbfaac384e353623f5b2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c0/ada636c457a645504e9a1b6dd13102baf04199": "a929675b81f3af48b2e7e9db013521b9",
".git/objects/ee/dc4c6700d74769f361162bb7cd0592941c61d6": "aaa4d1b8b59c74a6712329fe0251b110",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f2/515e7d18bdf7520f7a20366549f265917cd1cc": "0ca48b4c83ed1fed628e30de8d6d540f",
".git/objects/f2/0e40597f243bad5402d1d8c82d4271ac815d25": "cab5739b8276a568df6a259788f40153",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "341dff10df6725d444832c934b9f27b9",
".git/objects/cf/650c2de4aa367dbb4dac4cd2dd8e6f2e198329": "6a235ce4cc808778831dc19b544c99b8",
".git/objects/ca/85ae9cbc5fa6b1b1844e32015538b9f14c7d41": "9f8908342d792b6c34b17819fa35a0c4",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "bd87a7cf5ea05252e5a8b745c0877738",
".git/objects/ca/2591badf1fc643af310dd78798fa8571c3bd6c": "b5595fcb7b9a60be8dd20f23d316e4b6",
".git/objects/e4/8a8a84ba74e67110d63d70876144383dfe2b41": "a1d1a3d0761720988f7c40c8b842aaa2",
".git/objects/c1/317bf5b41fec392218c34018a3a6c9867e46b6": "9e71097447f6f10d4474f0ec9909fcf2",
".git/objects/20/1dd134edfe151c216cd79a5eb998417ff9339e": "4ebaf43333a793aa04faef1d95fdb8d4",
".git/objects/18/5983cc28474de3e94b2ce08fa5b034df4d16c0": "c793e4ac1a285b962cad97f1c88452b3",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "c071319a7242e951039ba343446845d0",
".git/objects/11/6ca70f21d48f56274584927d011fcd52d06be9": "17eaf9d75bb44ade7cc2ec298a6088c0",
".git/objects/7d/c124965d28403ec2545a24d7d1cd1fec1f57d8": "757df7cedd6a5903ceac899e7bb9fa99",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "aa349e87e38ecb9e74631648723c84ec",
".git/objects/1f/200e6dc5ea4e0ffafa06ac706fb1a6f5704544": "4b2ce9bc73cbdd581b66eab45cfdacb1",
".git/objects/1f/839c9e87a704a9aaa2e679625cf7174b5d0322": "6b6a9956f5d7931e2a43c0dacc6a3b98",
".git/objects/73/fdb31ccff93bdc2d4c406742d8f24d94d5717a": "3ee24052bfe9d86107702088e0049d29",
".git/objects/80/961466480a23b46a7a3aac9d1984523f106395": "096946b6d83fcdd850a0e5a777f057c7",
".git/objects/7b/cf57e9d855c154592977c13a9a0de1353930fc": "fca2f2f52df06cef6bd3b07a5f03bb96",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/26/25584aed77c9b00506e1261eb7c28c627c0436": "a8d1031bf49035b82124a9bc6f3799dd",
".git/objects/26/6f78b047954c1ab747ad2380f34aa57fd1fde9": "0677f414699a02e4afaa2121c9b60fb6",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "51edff8d784cd7e0eaf5ffe9d948eef5",
".git/objects/26/febd41be70e858ba9330c8915f7fdfaa818e6b": "6814d11381c5d72edbe029a168b17243",
".git/objects/21/cb86feb25699645fb5c3b59252da6ef0b7273a": "dc11300794e5ca996cf6b02058af8f1c",
".git/objects/4d/276510fff7d7103d99d67dfa78462a4ba76326": "eb74b4d0857b6511d29555a6f9de3703",
".git/objects/86/aa5f6d1e5675c73b8d619c8881aefafedbf236": "e334ec55f007a7078dbdc0c36e1debbc",
".git/objects/72/26fd5df7f3b13da828c6998cbd204f7ce9c9d9": "6aa17f4dc78f420f51171f6018e13c5b",
".git/objects/44/5272445032ce71d4cfc1cd089532012de73166": "24dd4886c1cb9504cd21b7535f14a769",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "7dc6862ccf9cf08361bcdcaa506b8cab",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/9f/40ba733a7a418463926ac63453e5cfa009c357": "3ca243c747ae7eadf5794ed762af41d7",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "cedd036902896227217e1fe4c1f5af01",
".git/objects/07/10e7df23462f69a86a3d6ce03557c75f84e415": "3248540984ff88f7dae79547fe821b99",
".git/objects/07/0b2cfee1b23167e0d797418b7ddef1e2e14afe": "2904445225c48ab552ebb1d4f8c29e05",
".git/objects/6e/2f34b682168d4e05846e055c23ccbc00aee0b5": "773137f39cabfb6db4c8c70fb2104e7a",
".git/objects/6e/86672130aac0e4918a028246f39139ae5a99c5": "82fbad820314fdc2f954c856b4ee80d6",
".git/objects/9a/c4ca28753998f487d5b92c3e3467214b88c236": "a2a180d0d546498b9a5f242f04929a76",
".git/objects/36/444e510bf6e5bef1422026c59293b826080bc0": "98f8bc09f92a8bbfb5fe2ef53972f96d",
".git/objects/91/5254975a42718fd30c4a64675d4aaf9e04e75a": "8994a0c05c1b10ee4adfca7160a0c489",
".git/objects/3a/c2f32443a9436202ede5fba40b9410ca1603bd": "ddbc32e4f35c755fd8bde20203c84b53",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "3ae74c50121a252af7b735f48bed9193",
".git/objects/54/117047660a61d8549cb361c47a6883ff66d452": "2c6635f9aa0524c0edec43b4b82bd72d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "8601fe5ad3c9535b9cb71142f3ee4c08",
".git/objects/53/ade842dd67e6a2d3f9f0ca719c092cb103fec1": "886906668ec85f01bcea0dd2fea22bdb",
".git/objects/3f/ce9ff0461ba0765af1031fd29b670634af02ad": "2abefbb84b82d42a57362d06a25e9374",
".git/objects/5e/344290a470b11929b1091666daf9db4889e51c": "4f34c94561065bb0e1029795ea963a40",
".git/objects/5b/8f59395227ccb5191786d0cceae9e026d7c1ea": "c2772fba9970529b08acc5d331f2ea4d",
".git/objects/37/e2b4fe03902f521479d1140a13375c65716952": "e2e78c602f139aec103b8b87143a148b",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "6ba60eff6a71de7a55ea52c6181fc6b8",
".git/objects/97/6921f42845219c26d4274d6c01808b1781ffbb": "9498d7785d03717971f7b835958c4e48",
".git/objects/97/a1d7ff2c1ebccdfd1d57d913ccf4ddbfead58b": "13a1b1fdeff8a1588767835da77a3922",
".git/objects/97/e107919d60308a539e0cbc1563e7fdde371e04": "38c18a2feba048136ff8d621fd3dacc9",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "b4afaf34c162751b3243fe7377bc4aae",
".git/objects/0f/6d7ad7e81bba23dca95c3d5eb267c8fcd01604": "1c762579880972b84f6b2b2737d80af6",
".git/objects/0a/ddd86b8fc4451e6faba9400f2c621120b424dd": "5f945a90c5d90a9e14e5ff432edcf1d2",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "885d0228e6aa85236d620d7e2b9feafb",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "541ccecb00d45c9fdc9852f95fcdad75",
".git/objects/90/bb20d6ad06dd3ca8338a5d0b12a9c3f248cc5a": "711c76988bc07964955755a3589bcd01",
".git/objects/90/745213f455f173cdace655d33f27384def4189": "31eab1136f96a3e9a8b2e096abc22f82",
".git/objects/d3/433cc6e72eb792ab2402fbb13e5b6856c13d30": "17e971411dee0b55facb43433f086752",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d4/7ddabf5156bbedf2de648789e468164c45dfe7": "dc550f23f4a84b9c165d51d88c93a5f1",
".git/objects/ba/b8f86473a2a5fa12c03656900ab6cf4b67db34": "18dcb87d13c29acd901a596b06404eed",
".git/objects/ba/ff5b04bc6e4b76ffbcd36916ca3338adff9d81": "b21ed87903e7515b63467efb424be44e",
".git/objects/a0/f537d3e9134d60876e7930051e6b87fe3030ac": "8d23fec759cb21d4a2e64ba9626e0303",
".git/objects/a0/6cac9c907520e58d995158ccfa6bc84d50d6c7": "92923cd47a46a6f0df652dd68dd83ae9",
".git/objects/a0/9f9beb5a6bf0733f7198bac29f99ac00dad7ba": "55c6b222131933d427c868c9f7681c9a",
".git/objects/a7/19ff77cced816caf4e621dfb5fd0e5ac147e6d": "5f7990df85d0ca4798bc690bfabb1f1f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "05f6258e74434f94977ac333a3891eeb",
".git/objects/b1/f8a3f7dd3b266080351b92b492ae47cdc5caab": "1edc267e3c25155530e2fa4723f1ef98",
".git/objects/dd/1512b92aeb3ddd662882e6feab8a24df76a15d": "5ba3206ed9f4d1c539f21cf41fb57bc9",
".git/objects/dc/4383ef74061c9f6ff85cdb4c8c716c0ee84f38": "2a13aa96218b14701975942fbcc30cb5",
".git/objects/d5/cb6d93e71c075a9adb02c97457e100c3ede77e": "3e792948f2851663d0685ee1beb56d6d",
".git/objects/af/c5042e5c246e1e68580ea0072851b50a5105ac": "06e08964cde841d5f77f1ed979078e85",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/db/550e07699df29060288b746e5545748ce50a1d": "95bc10fd19b8d9663f8f2fa52243fd35",
".git/objects/db/17e768887a564e71559ba67179c1b522751ad2": "efb6d9798085927fed08ed9eaeee334e",
".git/objects/db/6c8a74ffd1ba73212f522008c46cc0b78eac10": "2a1fd236d1b99b9fddfb4bfe34eac598",
".git/objects/b0/4dfcf9a4328e592b642ca2ae99cd2b25dde276": "aab74b796aa59a3b6f452cbd2e3799b4",
".git/objects/b0/07d71fcb3cfeb4c9c6ff9c38ebc304fa9474e9": "23dd4e068339a7cd394f2ee518ae97ce",
".git/objects/a6/7dbd07e293e99259c60cb9f359ee063683c96e": "4fb100324af6599c625847ce5ed36b06",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/a8995be048de9b92acc5e161a68b47ac4105d6": "db3ec3989886f7f2301f6051704d1272",
".git/objects/c4/df88e648b37f7276b165e062d0469f30b186a8": "ac0f9f4f9caf326255800002d8697c03",
".git/objects/cc/941622aadd413208a301ce9091400220a0a905": "f2884f3e947b8c8887a7066ca3889750",
".git/objects/cc/dc3a934c237e377466431210963ff57509b4f2": "078cc9a98d3662779bed4d1c707e8c53",
".git/objects/f9/af3b715e93022399079d3354e2571035c69511": "8beb677fc95f9202ab5fafea7201d585",
".git/objects/f0/9906caf5f7cdbd68c4238ddb087f1c8887d702": "2bebaa49143690c946c7c9efdfe0c3d2",
".git/objects/46/a01919248933add3d7fc9f523620e1bc138d7d": "b85b2a5bdf3b0b8fd5befafa4e7741bc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/1b/5e6765b4f29d9671b8ab5492487d2b648c2df2": "4186d427f4811f9362c308e6ebe87815",
".git/objects/48/a0f291361a756437971de33d1a3fd7043567ba": "262d17b6a4883a6372d6ee455826cb26",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "a1eb710863406c04c5e7b061f2e96af9",
".git/objects/12/659c42292cae63a3c9ddafabdd7407a7bed767": "780c78ac1e8096d89f74b04fe7e1897d",
".git/objects/12/4cb7a10f2efff58fbe58ed55685922ec23c9f4": "a76baa3ef3c5aa40070746685d9e0e00",
".git/objects/8c/381832db9280ac407c968a8fa1522cd6f9b254": "b0db9a0ba68b300dd7669899d17568d2",
".git/objects/85/129cafe40d244c6b1e0323c8e9f910f070ab12": "8341458e30e3352b29360e0bf587ba31",
".git/objects/1d/fce2dbac59087846d00d440cac11efae2d95dc": "2a4a6f010a9997be092013335b051117",
".git/objects/82/96307dbdc033de0ae1db649578fac4653ef070": "b3ac88497b5e35f50c29a3c1f19e64f6",
".git/objects/82/5f753d8c4be03a41688622b0a5a82d9591b403": "faf891b7a104f9acb5b5ee07500422d1",
".git/objects/49/e606eb2a06f7b51a6fa626aca96fd710556d41": "8f40d33f28ff6bbf5f61dec2487f283c",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "b8d6f15ef784ef37473a3264834abc7d",
".git/objects/2b/1d9ba239248ecadb960dadfc3615e011612964": "3c76e58f79b0fd23d6e0ae21429d468e",
".git/objects/47/71e45c6e3baaba67ca2c544c5012115bf5dcd6": "cfc7ca182bb42e3ea839f4f9ae1e2fc6",
".git/objects/8b/3fc28018054a29e078e5e59153f5e21ff8821c": "fead688c999177039ca9b17da3d542d1",
".git/objects/7a/fcb101fbd61b1bef7798672a3dddcae54d6278": "cca026a6642b0a83cef22ba808a2fbba",
".git/objects/22/6497154fc6bef3b98802a289656ab451a8f8ab": "f6944e39eeb776737d2740112d338740",
".git/objects/22/6452b1c3c54d1f95a793286e657d5bc9cc41d6": "d59c46608d33c5f2dbe60d855dfae3fd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e965399dfa0b2e6e6c17b1c83420cd3e",
".git/logs/refs/heads/main": "1f3f8d25de0b7a23c18d146fdf7a7fe6",
".git/logs/refs/remotes/origin/main": "26f89a0ee3b93cbe81464de590a95914",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "bdf71b3ab9de7507861e72f969949c00",
".git/refs/remotes/origin/main": "bdf71b3ab9de7507861e72f969949c00",
".git/index": "78fe28e7802cdf0a295a8188def1b02f",
".git/COMMIT_EDITMSG": "33b8b9b864370f7a7c03d7df321f82e6",
".git/FETCH_HEAD": "84d762c6c3577944e160495b5f1c763b",
"assets/AssetManifest.json": "a432476f204a89194829f94a2283cd4a",
"assets/NOTICES": "93ea26c993a9e055943cc7a109793880",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "8c8a02ba12ca06e9263397d46055e3c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "a61a2563356b1acba66eb4ffcbc323dc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "04aa960892f97b5b434b6f0f2acb8da0",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/cake.png": "10b4bd3808e8c32216d7f3890a19d570",
"assets/assets/sound1.mp3": "3dbf0a877492b82a9229282e9c36aad0",
"assets/assets/confetti.png": "48aef651c41a80c75ab816e677a473ee",
"assets/assets/blue.png": "7e7eec6613973e073559d0bb6f97bf97",
"assets/assets/Background.png": "d8bc3d37e7e9245a1595b6b824127d19",
"assets/assets/music_box.mp3": "e39193a1999ea15f70232cb54679b3c1",
"assets/assets/birthday.png": "628fdf77bc6a3e9254341c1a1cb45dcc",
"assets/assets/balloon.png": "53f07f68db25736a97455c62e0c5726c",
"assets/assets/profile.jpeg": "edda6ad8c8054270b4f8abbd654efd12",
"assets/assets/gift.png": "fd57f7187ba67c34962da1e4eb4295fb",
"assets/assets/Vector4.png": "4f140e9a7c317c28fffb7f02b9da9ce8",
"assets/assets/fireworks.mp3": "fe41ea1f8fce7991607dd42e1605960e",
"assets/assets/Vector5.png": "af27827bd402ae441637b2b556b6560c",
"assets/assets/Vector6.png": "7e2f1a00baada495a566abb2ae76ca98",
"assets/assets/Vector2.png": "a110fe5cbc765a59604b76c3526f1dbd",
"assets/assets/balloon2.png": "b93453af7265c80e90f0f2c798234bf2",
"assets/assets/balloon3.png": "20efbba2abe7966ab4a0da43d957db36",
"assets/assets/Vector3.png": "c7e7b4b4b8ae5f04b5ecc68373912b89",
"assets/assets/Vector1.png": "6afb90e0da7dcc940b1947ad6d9b651b",
"assets/assets/rainbow.png": "13e67387a577236b802ccd65e1e7775e",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "304c4cf1d26d48ef608c8a4e3497a623",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "7ffe1d213cb7f189bb46f7c81ed224eb",
".idea/git_toolbox_blame.xml": "bc871aecfa6dacfa3bcb212c6a849498"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
