// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc7 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc8 = stdlib.T_Tuple([ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc3, ctc1, ctc1, ctc6, ctc7, ctc1, ctc0]);
  
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v1258, v1259, v1261, v1266, v1276] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1261, v1353, v1354, v1432, v1459, v1468, v1469, v2008] = svs;
      return (await ((async () => {
        
        
        return v2008;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v1261, v1353, v2008, v2053, v2057] = svs;
      return (await ((async () => {
        
        
        return v2008;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v1261, v1353, v2008, v2053, v2057] = svs;
      return (await ((async () => {
        
        
        return v2008;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'))) {
      const [v1258, v1261, v1347, v1349, v1350, v1351, v1353, v1354, v1355, v1356, v1360, v1432, v1434, v1448, v1459, v1460, v1461, v1468, v1469, v1582] = svs;
      return (await ((async () => {
        
        
        return v1460;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      state: {
        decode: _state,
        ty: ctc8
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc5, ctc1],
      4: [ctc2, ctc6, ctc7, ctc1, ctc1, ctc5, ctc1, ctc8],
      5: [ctc2, ctc6, ctc8, ctc1, ctc7],
      6: [ctc2, ctc6, ctc8, ctc1, ctc7],
      8: [ctc0, ctc2, ctc0, ctc1, ctc1, ctc1, ctc6, ctc7, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1, ctc8, ctc0, ctc5, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Auctioneer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc4 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc5 = stdlib.T_Object({
    acceptFee: ctc1,
    addrs: ctc3,
    constructFee: ctc1,
    distr: ctc4,
    endSecs: ctc1,
    floorPrice: ctc1,
    relayFee: ctc1,
    royaltyCap: ctc1,
    startPrice: ctc1,
    tokenAmount: ctc1
    });
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    acceptOffer0_698: ctc7,
    cancel0_698: ctc7,
    touch0_698: ctc7
    });
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v1240 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1241 = [v1240];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1258, v1259, v1260, v1261], secs: v1263, time: v1262, didSend: v46, from: v1257 } = txn1;
  const v1264 = v1241[stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0')];
  const v1265 = stdlib.Array_set(v1264, '0', stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'));
  const v1266 = stdlib.Array_set(v1241, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'), v1265);
  ;
  ;
  const v1276 = stdlib.safeAdd(v1262, v1260);
  const v1278 = ctc.selfAddress();
  const v1280 = stdlib.protect(ctc5, await interact.getParams(), {
    at: './interface.rsh:149:38:application',
    fs: ['at ./interface.rsh:136:18:application call to [unknown function] (defined at: ./interface.rsh:136:22:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: 'getParams',
    who: 'Auctioneer'
    });
  const v1281 = v1280.acceptFee;
  const v1282 = v1280.addrs;
  const v1283 = v1280.constructFee;
  const v1284 = v1280.distr;
  const v1285 = v1280.endSecs;
  const v1286 = v1280.floorPrice;
  const v1287 = v1280.relayFee;
  const v1288 = v1280.royaltyCap;
  const v1289 = v1280.startPrice;
  const v1290 = v1280.tokenAmount;
  
  const v1319 = stdlib.gt(v1290, stdlib.checkedBigNumberify('./interface.rsh:168:27:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1319, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:168:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: null,
    who: 'Auctioneer'
    });
  const v1321 = stdlib.gt(v1286, stdlib.checkedBigNumberify('./interface.rsh:169:26:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1321, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: null,
    who: 'Auctioneer'
    });
  const v1323 = stdlib.le(v1286, v1289);
  stdlib.assert(v1323, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: null,
    who: 'Auctioneer'
    });
  const v1325 = stdlib.gt(v1285, stdlib.checkedBigNumberify('./interface.rsh:171:23:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1325, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: null,
    who: 'Auctioneer'
    });
  const v1327 = await stdlib.Array_asyncReduce([v1284], stdlib.checkedBigNumberify('reach standard library:147:19:decimal', stdlib.UInt_max, '0'), async([v1329], v1328, v1330) => {
    const v1331 = stdlib.safeAdd(v1328, v1329);
    
    return v1331;})
  const v1332 = stdlib.le(v1327, v1288);
  stdlib.assert(v1332, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:173:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: null,
    who: 'Auctioneer'
    });
  const v1334 = stdlib.safeMul(stdlib.checkedBigNumberify('./interface.rsh:174:28:decimal', stdlib.UInt_max, '10'), v1286);
  const v1335 = stdlib.safeDiv(v1334, stdlib.checkedBigNumberify('./interface.rsh:174:47:decimal', stdlib.UInt_max, '1000000'));
  const v1336 = stdlib.eq(v1288, v1335);
  stdlib.assert(v1336, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:174:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: null,
    who: 'Auctioneer'
    });
  const v1338 = stdlib.ge(v1281, stdlib.checkedBigNumberify('./interface.rsh:21:24:decimal', stdlib.UInt_max, '6000'));
  stdlib.assert(v1338, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: null,
    who: 'Auctioneer'
    });
  const v1340 = stdlib.ge(v1283, stdlib.checkedBigNumberify('./interface.rsh:22:27:decimal', stdlib.UInt_max, '5000'));
  stdlib.assert(v1340, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: null,
    who: 'Auctioneer'
    });
  const v1342 = stdlib.ge(v1287, stdlib.checkedBigNumberify('./interface.rsh:23:23:decimal', stdlib.UInt_max, '17000'));
  stdlib.assert(v1342, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:177:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: null,
    who: 'Auctioneer'
    });
  const v1344 = stdlib.safeAdd(v1283, v1281);
  const v1345 = stdlib.safeAdd(v1344, v1287);
  const v1346 = stdlib.safeAdd(v1259, v1345);
  
  const txn2 = await (ctc.sendrecv({
    args: [v1258, v1259, v1261, v1266, v1276, v1278, v1290, v1289, v1286, v1285, v1282, v1284, v1288, v1281, v1283, v1287],
    evt_cnt: 11,
    funcNum: 1,
    lct: v1262,
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc3, ctc4, ctc1, ctc1, ctc1, ctc1],
    pay: [v1346, [[v1290, v1261]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1348, v1349, v1350, v1351, v1352, v1353, v1354, v1355, v1356, v1357, v1358], secs: v1360, time: v1359, didSend: v425, from: v1347 } = txn2;
      
      const v1386 = stdlib.safeAdd(v1357, v1356);
      const v1387 = stdlib.safeAdd(v1386, v1358);
      const v1388 = stdlib.safeAdd(v1259, v1387);
      sim_r.txns.push({
        amt: v1388,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1391 = v1266[stdlib.checkedBigNumberify('./interface.rsh:154:14:dot', stdlib.UInt_max, '0')];
      const v1392 = v1391[stdlib.checkedBigNumberify('./interface.rsh:154:14:dot', stdlib.UInt_max, '0')];
      const v1393 = stdlib.safeAdd(v1392, v1349);
      const v1395 = stdlib.Array_set(v1391, '0', v1393);
      const v1396 = stdlib.Array_set(v1266, stdlib.checkedBigNumberify('./interface.rsh:154:14:dot', stdlib.UInt_max, '0'), v1395);
      sim_r.txns.push({
        amt: v1349,
        kind: 'to',
        tok: v1261
        });
      const v1397 = stdlib.safeAdd(v1259, v1357);
      const v1401 = stdlib.safeSub(v1388, v1397);
      sim_r.txns.push({
        kind: 'from',
        to: v1258,
        tok: undefined /* Nothing */
        });
      
      const v1405 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '0')];
      const v1407 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '1')];
      const v1409 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '2')];
      const v1411 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '3')];
      const v1413 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '4')];
      const v1415 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '5')];
      const v1417 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '6')];
      const v1419 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '7')];
      const v1421 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '8')];
      const v1425 = stdlib.safeAdd(v1405, v1407);
      const v1426 = stdlib.safeAdd(v1425, v1409);
      const v1427 = stdlib.safeAdd(v1426, v1411);
      const v1428 = stdlib.safeAdd(v1427, v1413);
      const v1429 = stdlib.safeAdd(v1428, v1415);
      const v1430 = stdlib.safeAdd(v1429, v1417);
      const v1431 = stdlib.safeAdd(v1430, v1419);
      const v1432 = stdlib.safeAdd(v1431, v1421);
      const v1434 = stdlib.safeSub(v1350, v1351);
      const v1435 = stdlib.safeSub(v1352, v1360);
      const v1443 = stdlib.safeMul(v1434, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
      const v1448 = stdlib.safeDiv(v1443, v1435);
      const v1457 = stdlib.safeDiv(v1448, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
      const v1458 = [v1348, v1261, v1349, v1350, v1350, v1351, false, v1352, v1457, v1353, v1354, v1355, v1348];
      const v1459 = stdlib.checkedBigNumberify('./interface.rsh:222:73:decimal', stdlib.UInt_max, '0');
      const v1460 = v1458;
      const v1461 = v1347;
      const v1462 = v1359;
      const v1468 = v1396;
      const v1469 = v1401;
      
      if (await (async () => {
        const v1552 = v1460[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '6')];
        const v1578 = v1552 ? false : true;
        
        return v1578;})()) {
        const v1582 = v1460[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '3')];
        sim_r.isHalt = false;
        }
      else {
        const v2008 = stdlib.Array_set(v1460, '12', v1461);
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v1276],
    tys: [ctc0, ctc1, ctc2, ctc11, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc3, ctc4, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v1258, v1259, v1261, v1266, v1276],
      evt_cnt: 0,
      funcNum: 2,
      lct: v1262,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:185:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v2132, time: v2131, didSend: v1180, from: v2130 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v1261
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc1, ctc2, ctc11, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v2132, time: v2131, didSend: v1180, from: v2130 } = txn3;
    ;
    return;
    
    }
  else {
    const {data: [v1348, v1349, v1350, v1351, v1352, v1353, v1354, v1355, v1356, v1357, v1358], secs: v1360, time: v1359, didSend: v425, from: v1347 } = txn2;
    const v1361 = stdlib.gt(v1349, stdlib.checkedBigNumberify('./interface.rsh:168:27:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v1361, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:168:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Auctioneer'
      });
    const v1363 = stdlib.gt(v1351, stdlib.checkedBigNumberify('./interface.rsh:169:26:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v1363, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Auctioneer'
      });
    const v1365 = stdlib.le(v1351, v1350);
    stdlib.assert(v1365, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Auctioneer'
      });
    const v1367 = stdlib.gt(v1352, stdlib.checkedBigNumberify('./interface.rsh:171:23:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v1367, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Auctioneer'
      });
    const v1369 = await stdlib.Array_asyncReduce([v1354], stdlib.checkedBigNumberify('reach standard library:147:19:decimal', stdlib.UInt_max, '0'), async([v1371], v1370, v1372) => {
      const v1373 = stdlib.safeAdd(v1370, v1371);
      
      return v1373;})
    const v1374 = stdlib.le(v1369, v1355);
    stdlib.assert(v1374, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:173:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Auctioneer'
      });
    const v1376 = stdlib.safeMul(stdlib.checkedBigNumberify('./interface.rsh:174:28:decimal', stdlib.UInt_max, '10'), v1351);
    const v1377 = stdlib.safeDiv(v1376, stdlib.checkedBigNumberify('./interface.rsh:174:47:decimal', stdlib.UInt_max, '1000000'));
    const v1378 = stdlib.eq(v1355, v1377);
    stdlib.assert(v1378, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:174:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Auctioneer'
      });
    const v1380 = stdlib.ge(v1356, stdlib.checkedBigNumberify('./interface.rsh:21:24:decimal', stdlib.UInt_max, '6000'));
    stdlib.assert(v1380, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Auctioneer'
      });
    const v1382 = stdlib.ge(v1357, stdlib.checkedBigNumberify('./interface.rsh:22:27:decimal', stdlib.UInt_max, '5000'));
    stdlib.assert(v1382, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Auctioneer'
      });
    const v1384 = stdlib.ge(v1358, stdlib.checkedBigNumberify('./interface.rsh:23:23:decimal', stdlib.UInt_max, '17000'));
    stdlib.assert(v1384, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:177:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Auctioneer'
      });
    const v1386 = stdlib.safeAdd(v1357, v1356);
    const v1387 = stdlib.safeAdd(v1386, v1358);
    const v1388 = stdlib.safeAdd(v1259, v1387);
    ;
    const v1391 = v1266[stdlib.checkedBigNumberify('./interface.rsh:154:14:dot', stdlib.UInt_max, '0')];
    const v1392 = v1391[stdlib.checkedBigNumberify('./interface.rsh:154:14:dot', stdlib.UInt_max, '0')];
    const v1393 = stdlib.safeAdd(v1392, v1349);
    const v1395 = stdlib.Array_set(v1391, '0', v1393);
    const v1396 = stdlib.Array_set(v1266, stdlib.checkedBigNumberify('./interface.rsh:154:14:dot', stdlib.UInt_max, '0'), v1395);
    ;
    const v1397 = stdlib.safeAdd(v1259, v1357);
    const v1401 = stdlib.safeSub(v1388, v1397);
    ;
    stdlib.protect(ctc6, await interact.signal(), {
      at: './interface.rsh:191:29:application',
      fs: ['at ./interface.rsh:191:29:application call to [unknown function] (defined at: ./interface.rsh:191:29:function exp)', 'at ./interface.rsh:191:29:application call to "liftedInteract" (defined at: ./interface.rsh:191:29:application)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: 'signal',
      who: 'Auctioneer'
      });
    
    const v1405 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '0')];
    const v1407 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '1')];
    const v1409 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '2')];
    const v1411 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '3')];
    const v1413 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '4')];
    const v1415 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '5')];
    const v1417 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '6')];
    const v1419 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '7')];
    const v1421 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '8')];
    const v1425 = stdlib.safeAdd(v1405, v1407);
    const v1426 = stdlib.safeAdd(v1425, v1409);
    const v1427 = stdlib.safeAdd(v1426, v1411);
    const v1428 = stdlib.safeAdd(v1427, v1413);
    const v1429 = stdlib.safeAdd(v1428, v1415);
    const v1430 = stdlib.safeAdd(v1429, v1417);
    const v1431 = stdlib.safeAdd(v1430, v1419);
    const v1432 = stdlib.safeAdd(v1431, v1421);
    const v1434 = stdlib.safeSub(v1350, v1351);
    const v1435 = stdlib.safeSub(v1352, v1360);
    const v1443 = stdlib.safeMul(v1434, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
    const v1448 = stdlib.safeDiv(v1443, v1435);
    const v1457 = stdlib.safeDiv(v1448, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
    const v1458 = [v1348, v1261, v1349, v1350, v1350, v1351, false, v1352, v1457, v1353, v1354, v1355, v1348];
    let v1459 = stdlib.checkedBigNumberify('./interface.rsh:222:73:decimal', stdlib.UInt_max, '0');
    let v1460 = v1458;
    let v1461 = v1347;
    let v1462 = v1359;
    let v1468 = v1396;
    let v1469 = v1401;
    
    while (await (async () => {
      const v1552 = v1460[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '6')];
      const v1578 = v1552 ? false : true;
      
      return v1578;})()) {
      const v1582 = v1460[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '3')];
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 7,
        out_tys: [ctc8],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1644], secs: v1646, time: v1645, didSend: v875, from: v1643 } = txn3;
      switch (v1644[0]) {
        case 'acceptOffer0_698': {
          const v1647 = v1644[1];
          undefined /* setApiDetails */;
          const v1656 = stdlib.safeAdd(v1469, v1582);
          ;
          const v1658 = null;
          await txn3.getOutput('acceptOffer', 'v1658', ctc6, v1658);
          const v1665 = stdlib.safeSub(v1646, v1360);
          const v1666 = stdlib.safeMul(v1665, v1448);
          const v1667 = stdlib.safeDiv(v1666, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
          const v1669 = stdlib.lt(v1667, v1434);
          const v1670 = v1669 ? v1667 : v1434;
          let v1671;
          const v1672 = stdlib.le(v1350, v1670);
          if (v1672) {
            v1671 = v1351;
            }
          else {
            const v1673 = stdlib.safeSub(v1350, v1670);
            v1671 = v1673;
            }
          const v1674 = stdlib.gt(v1351, v1671);
          const v1675 = v1674 ? v1351 : v1671;
          const v1677 = stdlib.safeSub(v1582, v1675);
          const v1678 = stdlib.safeDiv(v1675, stdlib.checkedBigNumberify('./interface.rsh:272:30:decimal', stdlib.UInt_max, '100'));
          const v1679 = stdlib.safeSub(v1675, v1678);
          const v1680 = stdlib.safeDiv(v1679, v1355);
          const v1681 = stdlib.safeMul(v1680, v1432);
          const v1683 = stdlib.safeSub(v1679, v1681);
          const v1687 = stdlib.safeSub(v1656, v1678);
          ;
          const v1691 = stdlib.safeSub(v1687, v1683);
          ;
          const v1692 = stdlib.safeAdd(v1356, v1677);
          const v1696 = stdlib.safeSub(v1691, v1692);
          ;
          const v1697 = v1468[stdlib.checkedBigNumberify('./interface.rsh:278:64:application', stdlib.UInt_max, '0')];
          const v1698 = v1697[stdlib.checkedBigNumberify('./interface.rsh:278:64:application', stdlib.UInt_max, '0')];
          const v1702 = stdlib.safeSub(v1698, v1349);
          const v1704 = stdlib.Array_set(v1697, '0', v1702);
          const v1705 = stdlib.Array_set(v1468, stdlib.checkedBigNumberify('./interface.rsh:278:64:application', stdlib.UInt_max, '0'), v1704);
          ;
          const v1706 = stdlib.Array_set(v1460, '6', true);
          const v1707 = stdlib.Array_set(v1706, '3', v1675);
          const cv1459 = v1680;
          const cv1460 = v1707;
          const cv1461 = v1643;
          const cv1462 = v1645;
          const cv1468 = v1705;
          const cv1469 = v1696;
          
          v1459 = cv1459;
          v1460 = cv1460;
          v1461 = cv1461;
          v1462 = cv1462;
          v1468 = cv1468;
          v1469 = cv1469;
          
          continue;
          break;
          }
        case 'cancel0_698': {
          const v1757 = v1644[1];
          undefined /* setApiDetails */;
          ;
          const v1820 = stdlib.addressEq(v1643, v1347);
          stdlib.assert(v1820, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:293:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:296:13:application call to [unknown function] (defined at: ./interface.rsh:296:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
            msg: null,
            who: 'Auctioneer'
            });
          const v1822 = null;
          await txn3.getOutput('cancel', 'v1822', ctc6, v1822);
          const v1831 = stdlib.safeSub(v1469, v1356);
          ;
          const v1832 = v1468[stdlib.checkedBigNumberify('./interface.rsh:298:57:application', stdlib.UInt_max, '0')];
          const v1833 = v1832[stdlib.checkedBigNumberify('./interface.rsh:298:57:application', stdlib.UInt_max, '0')];
          const v1837 = stdlib.safeSub(v1833, v1349);
          const v1839 = stdlib.Array_set(v1832, '0', v1837);
          const v1840 = stdlib.Array_set(v1468, stdlib.checkedBigNumberify('./interface.rsh:298:57:application', stdlib.UInt_max, '0'), v1839);
          ;
          const v1841 = stdlib.Array_set(v1460, '6', true);
          const cv1459 = v1459;
          const cv1460 = v1841;
          const cv1461 = v1461;
          const cv1462 = v1645;
          const cv1468 = v1840;
          const cv1469 = v1831;
          
          v1459 = cv1459;
          v1460 = cv1460;
          v1461 = cv1461;
          v1462 = cv1462;
          v1468 = cv1468;
          v1469 = cv1469;
          
          continue;
          break;
          }
        case 'touch0_698': {
          const v1867 = v1644[1];
          undefined /* setApiDetails */;
          ;
          const v1955 = stdlib.ge(v1582, v1351);
          stdlib.assert(v1955, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:239:13:application call to [unknown function] (defined at: ./interface.rsh:239:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
            msg: null,
            who: 'Auctioneer'
            });
          const v1957 = null;
          await txn3.getOutput('touch', 'v1957', ctc6, v1957);
          const v1964 = stdlib.safeSub(v1646, v1360);
          const v1965 = stdlib.safeMul(v1964, v1448);
          const v1966 = stdlib.safeDiv(v1965, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
          const v1968 = stdlib.lt(v1966, v1434);
          const v1969 = v1968 ? v1966 : v1434;
          let v1970;
          const v1971 = stdlib.le(v1350, v1969);
          if (v1971) {
            v1970 = v1351;
            }
          else {
            const v1972 = stdlib.safeSub(v1350, v1969);
            v1970 = v1972;
            }
          const v1973 = stdlib.gt(v1351, v1970);
          const v1974 = v1973 ? v1351 : v1970;
          const v1975 = stdlib.Array_set(v1460, '3', v1974);
          const cv1459 = v1459;
          const cv1460 = v1975;
          const cv1461 = v1461;
          const cv1462 = v1645;
          const cv1468 = v1468;
          const cv1469 = v1469;
          
          v1459 = cv1459;
          v1460 = cv1460;
          v1461 = cv1461;
          v1462 = cv1462;
          v1468 = cv1468;
          v1469 = cv1469;
          
          continue;
          break;
          }
        }
      
      }
    const v2008 = stdlib.Array_set(v1460, '12', v1461);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v2047, time: v2046, didSend: v1079, from: v2045 } = txn3;
    ;
    const v2048 = v1468[stdlib.checkedBigNumberify('./interface.rsh:314:18:application', stdlib.UInt_max, '0')];
    const v2049 = v2048[stdlib.checkedBigNumberify('./interface.rsh:314:18:application', stdlib.UInt_max, '0')];
    const v2050 = stdlib.eq(v2049, stdlib.checkedBigNumberify('./interface.rsh:314:29:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2050, {
      at: './interface.rsh:314:10:application',
      fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Auctioneer'
      });
    const v2052 = stdlib.safeMul(v1459, v1432);
    const v2053 = stdlib.safeSub(v1469, v2052);
    const v2057 = await stdlib.Array_asyncMap([v1354], async([v2054], v2055) => {
      const v2056 = stdlib.safeMul(v2054, v1459);
      
      return v2056;})
    const v2058 = v2057[stdlib.checkedBigNumberify('./interface.rsh:317:20:array ref', stdlib.UInt_max, '0')];
    const v2059 = v1353[stdlib.checkedBigNumberify('./interface.rsh:317:33:array ref', stdlib.UInt_max, '0')];
    ;
    const v2064 = v2057[stdlib.checkedBigNumberify('./interface.rsh:318:20:array ref', stdlib.UInt_max, '1')];
    const v2065 = v1353[stdlib.checkedBigNumberify('./interface.rsh:318:33:array ref', stdlib.UInt_max, '1')];
    ;
    const v2070 = v2057[stdlib.checkedBigNumberify('./interface.rsh:319:20:array ref', stdlib.UInt_max, '2')];
    const v2071 = v1353[stdlib.checkedBigNumberify('./interface.rsh:319:33:array ref', stdlib.UInt_max, '2')];
    ;
    const v2076 = v2057[stdlib.checkedBigNumberify('./interface.rsh:320:20:array ref', stdlib.UInt_max, '3')];
    const v2077 = v1353[stdlib.checkedBigNumberify('./interface.rsh:320:33:array ref', stdlib.UInt_max, '3')];
    ;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v2084, time: v2083, didSend: v1118, from: v2082 } = txn4;
    ;
    const v2085 = v2057[stdlib.checkedBigNumberify('./interface.rsh:326:20:array ref', stdlib.UInt_max, '4')];
    const v2086 = v1353[stdlib.checkedBigNumberify('./interface.rsh:326:33:array ref', stdlib.UInt_max, '4')];
    ;
    const v2091 = v2057[stdlib.checkedBigNumberify('./interface.rsh:327:20:array ref', stdlib.UInt_max, '5')];
    const v2092 = v1353[stdlib.checkedBigNumberify('./interface.rsh:327:33:array ref', stdlib.UInt_max, '5')];
    ;
    const v2097 = v2057[stdlib.checkedBigNumberify('./interface.rsh:328:20:array ref', stdlib.UInt_max, '6')];
    const v2098 = v1353[stdlib.checkedBigNumberify('./interface.rsh:328:33:array ref', stdlib.UInt_max, '6')];
    ;
    const v2103 = v2057[stdlib.checkedBigNumberify('./interface.rsh:329:20:array ref', stdlib.UInt_max, '7')];
    const v2104 = v1353[stdlib.checkedBigNumberify('./interface.rsh:329:33:array ref', stdlib.UInt_max, '7')];
    ;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2112], secs: v2114, time: v2113, didSend: v1150, from: v2111 } = txn5;
    ;
    const v2115 = v2057[stdlib.checkedBigNumberify('./interface.rsh:338:20:array ref', stdlib.UInt_max, '8')];
    const v2116 = v1353[stdlib.checkedBigNumberify('./interface.rsh:338:33:array ref', stdlib.UInt_max, '8')];
    ;
    ;
    return;
    
    
    
    
    
    
    }
  
  
  
  };
export async function Constructor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Constructor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Constructor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Object({
    addr: ctc0,
    amt: ctc1,
    tok0: ctc2,
    ttl: ctc1
    });
  const ctc4 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc5 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    acceptOffer0_698: ctc6,
    cancel0_698: ctc6,
    touch0_698: ctc6
    });
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v1240 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1241 = [v1240];
  const v1248 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:30:67:application',
    fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:29:19:application call to [unknown function] (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:29:23:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:98:45:application call to "construct" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:28:40:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:91:3:function exp)'],
    msg: 'getParams',
    who: 'Constructor'
    });
  const v1249 = v1248.addr;
  const v1250 = v1248.amt;
  const v1251 = v1248.tok0;
  const v1252 = v1248.ttl;
  
  const txn1 = await (ctc.sendrecv({
    args: [v1249, v1250, v1252, v1251],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1258, v1259, v1260, v1261], secs: v1263, time: v1262, didSend: v46, from: v1257 } = txn1;
      
      const v1264 = v1241[stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0')];
      const v1265 = stdlib.Array_set(v1264, '0', stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'));
      const v1266 = stdlib.Array_set(v1241, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'), v1265);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1261
        });
      ;
      const v1276 = stdlib.safeAdd(v1262, v1260);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v1258, v1259, v1260, v1261], secs: v1263, time: v1262, didSend: v46, from: v1257 } = txn1;
  const v1264 = v1241[stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0')];
  const v1265 = stdlib.Array_set(v1264, '0', stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'));
  const v1266 = stdlib.Array_set(v1241, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'), v1265);
  ;
  ;
  const v1276 = stdlib.safeAdd(v1262, v1260);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 11,
    funcNum: 1,
    out_tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc4, ctc5, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: ['time', v1276],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v1258, v1259, v1261, v1266, v1276],
      evt_cnt: 0,
      funcNum: 2,
      lct: v1262,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:185:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v2132, time: v2131, didSend: v1180, from: v2130 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v1261
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc1, ctc2, ctc11, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v2132, time: v2131, didSend: v1180, from: v2130 } = txn3;
    ;
    return;
    
    }
  else {
    const {data: [v1348, v1349, v1350, v1351, v1352, v1353, v1354, v1355, v1356, v1357, v1358], secs: v1360, time: v1359, didSend: v425, from: v1347 } = txn2;
    const v1361 = stdlib.gt(v1349, stdlib.checkedBigNumberify('./interface.rsh:168:27:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v1361, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:168:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Constructor'
      });
    const v1363 = stdlib.gt(v1351, stdlib.checkedBigNumberify('./interface.rsh:169:26:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v1363, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Constructor'
      });
    const v1365 = stdlib.le(v1351, v1350);
    stdlib.assert(v1365, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Constructor'
      });
    const v1367 = stdlib.gt(v1352, stdlib.checkedBigNumberify('./interface.rsh:171:23:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v1367, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Constructor'
      });
    const v1369 = await stdlib.Array_asyncReduce([v1354], stdlib.checkedBigNumberify('reach standard library:147:19:decimal', stdlib.UInt_max, '0'), async([v1371], v1370, v1372) => {
      const v1373 = stdlib.safeAdd(v1370, v1371);
      
      return v1373;})
    const v1374 = stdlib.le(v1369, v1355);
    stdlib.assert(v1374, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:173:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Constructor'
      });
    const v1376 = stdlib.safeMul(stdlib.checkedBigNumberify('./interface.rsh:174:28:decimal', stdlib.UInt_max, '10'), v1351);
    const v1377 = stdlib.safeDiv(v1376, stdlib.checkedBigNumberify('./interface.rsh:174:47:decimal', stdlib.UInt_max, '1000000'));
    const v1378 = stdlib.eq(v1355, v1377);
    stdlib.assert(v1378, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:174:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Constructor'
      });
    const v1380 = stdlib.ge(v1356, stdlib.checkedBigNumberify('./interface.rsh:21:24:decimal', stdlib.UInt_max, '6000'));
    stdlib.assert(v1380, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Constructor'
      });
    const v1382 = stdlib.ge(v1357, stdlib.checkedBigNumberify('./interface.rsh:22:27:decimal', stdlib.UInt_max, '5000'));
    stdlib.assert(v1382, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Constructor'
      });
    const v1384 = stdlib.ge(v1358, stdlib.checkedBigNumberify('./interface.rsh:23:23:decimal', stdlib.UInt_max, '17000'));
    stdlib.assert(v1384, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:177:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Constructor'
      });
    const v1386 = stdlib.safeAdd(v1357, v1356);
    const v1387 = stdlib.safeAdd(v1386, v1358);
    const v1388 = stdlib.safeAdd(v1259, v1387);
    ;
    const v1391 = v1266[stdlib.checkedBigNumberify('./interface.rsh:154:14:dot', stdlib.UInt_max, '0')];
    const v1392 = v1391[stdlib.checkedBigNumberify('./interface.rsh:154:14:dot', stdlib.UInt_max, '0')];
    const v1393 = stdlib.safeAdd(v1392, v1349);
    const v1395 = stdlib.Array_set(v1391, '0', v1393);
    const v1396 = stdlib.Array_set(v1266, stdlib.checkedBigNumberify('./interface.rsh:154:14:dot', stdlib.UInt_max, '0'), v1395);
    ;
    const v1397 = stdlib.safeAdd(v1259, v1357);
    const v1401 = stdlib.safeSub(v1388, v1397);
    ;
    const v1405 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '0')];
    const v1407 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '1')];
    const v1409 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '2')];
    const v1411 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '3')];
    const v1413 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '4')];
    const v1415 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '5')];
    const v1417 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '6')];
    const v1419 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '7')];
    const v1421 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '8')];
    const v1425 = stdlib.safeAdd(v1405, v1407);
    const v1426 = stdlib.safeAdd(v1425, v1409);
    const v1427 = stdlib.safeAdd(v1426, v1411);
    const v1428 = stdlib.safeAdd(v1427, v1413);
    const v1429 = stdlib.safeAdd(v1428, v1415);
    const v1430 = stdlib.safeAdd(v1429, v1417);
    const v1431 = stdlib.safeAdd(v1430, v1419);
    const v1432 = stdlib.safeAdd(v1431, v1421);
    const v1434 = stdlib.safeSub(v1350, v1351);
    const v1435 = stdlib.safeSub(v1352, v1360);
    const v1443 = stdlib.safeMul(v1434, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
    const v1448 = stdlib.safeDiv(v1443, v1435);
    const v1457 = stdlib.safeDiv(v1448, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
    const v1458 = [v1348, v1261, v1349, v1350, v1350, v1351, false, v1352, v1457, v1353, v1354, v1355, v1348];
    let v1459 = stdlib.checkedBigNumberify('./interface.rsh:222:73:decimal', stdlib.UInt_max, '0');
    let v1460 = v1458;
    let v1461 = v1347;
    let v1462 = v1359;
    let v1468 = v1396;
    let v1469 = v1401;
    
    while (await (async () => {
      const v1552 = v1460[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '6')];
      const v1578 = v1552 ? false : true;
      
      return v1578;})()) {
      const v1582 = v1460[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '3')];
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 7,
        out_tys: [ctc7],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1644], secs: v1646, time: v1645, didSend: v875, from: v1643 } = txn3;
      switch (v1644[0]) {
        case 'acceptOffer0_698': {
          const v1647 = v1644[1];
          undefined /* setApiDetails */;
          const v1656 = stdlib.safeAdd(v1469, v1582);
          ;
          const v1658 = null;
          await txn3.getOutput('acceptOffer', 'v1658', ctc8, v1658);
          const v1665 = stdlib.safeSub(v1646, v1360);
          const v1666 = stdlib.safeMul(v1665, v1448);
          const v1667 = stdlib.safeDiv(v1666, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
          const v1669 = stdlib.lt(v1667, v1434);
          const v1670 = v1669 ? v1667 : v1434;
          let v1671;
          const v1672 = stdlib.le(v1350, v1670);
          if (v1672) {
            v1671 = v1351;
            }
          else {
            const v1673 = stdlib.safeSub(v1350, v1670);
            v1671 = v1673;
            }
          const v1674 = stdlib.gt(v1351, v1671);
          const v1675 = v1674 ? v1351 : v1671;
          const v1677 = stdlib.safeSub(v1582, v1675);
          const v1678 = stdlib.safeDiv(v1675, stdlib.checkedBigNumberify('./interface.rsh:272:30:decimal', stdlib.UInt_max, '100'));
          const v1679 = stdlib.safeSub(v1675, v1678);
          const v1680 = stdlib.safeDiv(v1679, v1355);
          const v1681 = stdlib.safeMul(v1680, v1432);
          const v1683 = stdlib.safeSub(v1679, v1681);
          const v1687 = stdlib.safeSub(v1656, v1678);
          ;
          const v1691 = stdlib.safeSub(v1687, v1683);
          ;
          const v1692 = stdlib.safeAdd(v1356, v1677);
          const v1696 = stdlib.safeSub(v1691, v1692);
          ;
          const v1697 = v1468[stdlib.checkedBigNumberify('./interface.rsh:278:64:application', stdlib.UInt_max, '0')];
          const v1698 = v1697[stdlib.checkedBigNumberify('./interface.rsh:278:64:application', stdlib.UInt_max, '0')];
          const v1702 = stdlib.safeSub(v1698, v1349);
          const v1704 = stdlib.Array_set(v1697, '0', v1702);
          const v1705 = stdlib.Array_set(v1468, stdlib.checkedBigNumberify('./interface.rsh:278:64:application', stdlib.UInt_max, '0'), v1704);
          ;
          const v1706 = stdlib.Array_set(v1460, '6', true);
          const v1707 = stdlib.Array_set(v1706, '3', v1675);
          const cv1459 = v1680;
          const cv1460 = v1707;
          const cv1461 = v1643;
          const cv1462 = v1645;
          const cv1468 = v1705;
          const cv1469 = v1696;
          
          v1459 = cv1459;
          v1460 = cv1460;
          v1461 = cv1461;
          v1462 = cv1462;
          v1468 = cv1468;
          v1469 = cv1469;
          
          continue;
          break;
          }
        case 'cancel0_698': {
          const v1757 = v1644[1];
          undefined /* setApiDetails */;
          ;
          const v1820 = stdlib.addressEq(v1643, v1347);
          stdlib.assert(v1820, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:293:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:296:13:application call to [unknown function] (defined at: ./interface.rsh:296:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
            msg: null,
            who: 'Constructor'
            });
          const v1822 = null;
          await txn3.getOutput('cancel', 'v1822', ctc8, v1822);
          const v1831 = stdlib.safeSub(v1469, v1356);
          ;
          const v1832 = v1468[stdlib.checkedBigNumberify('./interface.rsh:298:57:application', stdlib.UInt_max, '0')];
          const v1833 = v1832[stdlib.checkedBigNumberify('./interface.rsh:298:57:application', stdlib.UInt_max, '0')];
          const v1837 = stdlib.safeSub(v1833, v1349);
          const v1839 = stdlib.Array_set(v1832, '0', v1837);
          const v1840 = stdlib.Array_set(v1468, stdlib.checkedBigNumberify('./interface.rsh:298:57:application', stdlib.UInt_max, '0'), v1839);
          ;
          const v1841 = stdlib.Array_set(v1460, '6', true);
          const cv1459 = v1459;
          const cv1460 = v1841;
          const cv1461 = v1461;
          const cv1462 = v1645;
          const cv1468 = v1840;
          const cv1469 = v1831;
          
          v1459 = cv1459;
          v1460 = cv1460;
          v1461 = cv1461;
          v1462 = cv1462;
          v1468 = cv1468;
          v1469 = cv1469;
          
          continue;
          break;
          }
        case 'touch0_698': {
          const v1867 = v1644[1];
          undefined /* setApiDetails */;
          ;
          const v1955 = stdlib.ge(v1582, v1351);
          stdlib.assert(v1955, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:239:13:application call to [unknown function] (defined at: ./interface.rsh:239:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
            msg: null,
            who: 'Constructor'
            });
          const v1957 = null;
          await txn3.getOutput('touch', 'v1957', ctc8, v1957);
          const v1964 = stdlib.safeSub(v1646, v1360);
          const v1965 = stdlib.safeMul(v1964, v1448);
          const v1966 = stdlib.safeDiv(v1965, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
          const v1968 = stdlib.lt(v1966, v1434);
          const v1969 = v1968 ? v1966 : v1434;
          let v1970;
          const v1971 = stdlib.le(v1350, v1969);
          if (v1971) {
            v1970 = v1351;
            }
          else {
            const v1972 = stdlib.safeSub(v1350, v1969);
            v1970 = v1972;
            }
          const v1973 = stdlib.gt(v1351, v1970);
          const v1974 = v1973 ? v1351 : v1970;
          const v1975 = stdlib.Array_set(v1460, '3', v1974);
          const cv1459 = v1459;
          const cv1460 = v1975;
          const cv1461 = v1461;
          const cv1462 = v1645;
          const cv1468 = v1468;
          const cv1469 = v1469;
          
          v1459 = cv1459;
          v1460 = cv1460;
          v1461 = cv1461;
          v1462 = cv1462;
          v1468 = cv1468;
          v1469 = cv1469;
          
          continue;
          break;
          }
        }
      
      }
    const v2008 = stdlib.Array_set(v1460, '12', v1461);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v2047, time: v2046, didSend: v1079, from: v2045 } = txn3;
    ;
    const v2048 = v1468[stdlib.checkedBigNumberify('./interface.rsh:314:18:application', stdlib.UInt_max, '0')];
    const v2049 = v2048[stdlib.checkedBigNumberify('./interface.rsh:314:18:application', stdlib.UInt_max, '0')];
    const v2050 = stdlib.eq(v2049, stdlib.checkedBigNumberify('./interface.rsh:314:29:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2050, {
      at: './interface.rsh:314:10:application',
      fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Constructor'
      });
    const v2052 = stdlib.safeMul(v1459, v1432);
    const v2053 = stdlib.safeSub(v1469, v2052);
    const v2057 = await stdlib.Array_asyncMap([v1354], async([v2054], v2055) => {
      const v2056 = stdlib.safeMul(v2054, v1459);
      
      return v2056;})
    const v2058 = v2057[stdlib.checkedBigNumberify('./interface.rsh:317:20:array ref', stdlib.UInt_max, '0')];
    const v2059 = v1353[stdlib.checkedBigNumberify('./interface.rsh:317:33:array ref', stdlib.UInt_max, '0')];
    ;
    const v2064 = v2057[stdlib.checkedBigNumberify('./interface.rsh:318:20:array ref', stdlib.UInt_max, '1')];
    const v2065 = v1353[stdlib.checkedBigNumberify('./interface.rsh:318:33:array ref', stdlib.UInt_max, '1')];
    ;
    const v2070 = v2057[stdlib.checkedBigNumberify('./interface.rsh:319:20:array ref', stdlib.UInt_max, '2')];
    const v2071 = v1353[stdlib.checkedBigNumberify('./interface.rsh:319:33:array ref', stdlib.UInt_max, '2')];
    ;
    const v2076 = v2057[stdlib.checkedBigNumberify('./interface.rsh:320:20:array ref', stdlib.UInt_max, '3')];
    const v2077 = v1353[stdlib.checkedBigNumberify('./interface.rsh:320:33:array ref', stdlib.UInt_max, '3')];
    ;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v2084, time: v2083, didSend: v1118, from: v2082 } = txn4;
    ;
    const v2085 = v2057[stdlib.checkedBigNumberify('./interface.rsh:326:20:array ref', stdlib.UInt_max, '4')];
    const v2086 = v1353[stdlib.checkedBigNumberify('./interface.rsh:326:33:array ref', stdlib.UInt_max, '4')];
    ;
    const v2091 = v2057[stdlib.checkedBigNumberify('./interface.rsh:327:20:array ref', stdlib.UInt_max, '5')];
    const v2092 = v1353[stdlib.checkedBigNumberify('./interface.rsh:327:33:array ref', stdlib.UInt_max, '5')];
    ;
    const v2097 = v2057[stdlib.checkedBigNumberify('./interface.rsh:328:20:array ref', stdlib.UInt_max, '6')];
    const v2098 = v1353[stdlib.checkedBigNumberify('./interface.rsh:328:33:array ref', stdlib.UInt_max, '6')];
    ;
    const v2103 = v2057[stdlib.checkedBigNumberify('./interface.rsh:329:20:array ref', stdlib.UInt_max, '7')];
    const v2104 = v1353[stdlib.checkedBigNumberify('./interface.rsh:329:33:array ref', stdlib.UInt_max, '7')];
    ;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2112], secs: v2114, time: v2113, didSend: v1150, from: v2111 } = txn5;
    ;
    const v2115 = v2057[stdlib.checkedBigNumberify('./interface.rsh:338:20:array ref', stdlib.UInt_max, '8')];
    const v2116 = v1353[stdlib.checkedBigNumberify('./interface.rsh:338:33:array ref', stdlib.UInt_max, '8')];
    ;
    ;
    return;
    
    
    
    
    
    
    }
  
  
  
  };
export async function Relay(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Relay expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Relay expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc4 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    acceptOffer0_698: ctc5,
    cancel0_698: ctc5,
    touch0_698: ctc5
    });
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc0, ctc2, ctc1, ctc1, ctc1, ctc1, ctc8, ctc1, ctc1, ctc3, ctc4, ctc1, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v1240 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1241 = [v1240];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1258, v1259, v1260, v1261], secs: v1263, time: v1262, didSend: v46, from: v1257 } = txn1;
  const v1264 = v1241[stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0')];
  const v1265 = stdlib.Array_set(v1264, '0', stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'));
  const v1266 = stdlib.Array_set(v1241, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'), v1265);
  ;
  ;
  const v1276 = stdlib.safeAdd(v1262, v1260);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 11,
    funcNum: 1,
    out_tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc3, ctc4, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: ['time', v1276],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v1258, v1259, v1261, v1266, v1276],
      evt_cnt: 0,
      funcNum: 2,
      lct: v1262,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:185:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v2132, time: v2131, didSend: v1180, from: v2130 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v1261
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc1, ctc2, ctc11, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v2132, time: v2131, didSend: v1180, from: v2130 } = txn3;
    ;
    return;
    
    }
  else {
    const {data: [v1348, v1349, v1350, v1351, v1352, v1353, v1354, v1355, v1356, v1357, v1358], secs: v1360, time: v1359, didSend: v425, from: v1347 } = txn2;
    const v1361 = stdlib.gt(v1349, stdlib.checkedBigNumberify('./interface.rsh:168:27:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v1361, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:168:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Relay'
      });
    const v1363 = stdlib.gt(v1351, stdlib.checkedBigNumberify('./interface.rsh:169:26:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v1363, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Relay'
      });
    const v1365 = stdlib.le(v1351, v1350);
    stdlib.assert(v1365, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Relay'
      });
    const v1367 = stdlib.gt(v1352, stdlib.checkedBigNumberify('./interface.rsh:171:23:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v1367, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Relay'
      });
    const v1369 = await stdlib.Array_asyncReduce([v1354], stdlib.checkedBigNumberify('reach standard library:147:19:decimal', stdlib.UInt_max, '0'), async([v1371], v1370, v1372) => {
      const v1373 = stdlib.safeAdd(v1370, v1371);
      
      return v1373;})
    const v1374 = stdlib.le(v1369, v1355);
    stdlib.assert(v1374, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:173:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Relay'
      });
    const v1376 = stdlib.safeMul(stdlib.checkedBigNumberify('./interface.rsh:174:28:decimal', stdlib.UInt_max, '10'), v1351);
    const v1377 = stdlib.safeDiv(v1376, stdlib.checkedBigNumberify('./interface.rsh:174:47:decimal', stdlib.UInt_max, '1000000'));
    const v1378 = stdlib.eq(v1355, v1377);
    stdlib.assert(v1378, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:174:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Relay'
      });
    const v1380 = stdlib.ge(v1356, stdlib.checkedBigNumberify('./interface.rsh:21:24:decimal', stdlib.UInt_max, '6000'));
    stdlib.assert(v1380, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Relay'
      });
    const v1382 = stdlib.ge(v1357, stdlib.checkedBigNumberify('./interface.rsh:22:27:decimal', stdlib.UInt_max, '5000'));
    stdlib.assert(v1382, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Relay'
      });
    const v1384 = stdlib.ge(v1358, stdlib.checkedBigNumberify('./interface.rsh:23:23:decimal', stdlib.UInt_max, '17000'));
    stdlib.assert(v1384, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:177:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Relay'
      });
    const v1386 = stdlib.safeAdd(v1357, v1356);
    const v1387 = stdlib.safeAdd(v1386, v1358);
    const v1388 = stdlib.safeAdd(v1259, v1387);
    ;
    const v1391 = v1266[stdlib.checkedBigNumberify('./interface.rsh:154:14:dot', stdlib.UInt_max, '0')];
    const v1392 = v1391[stdlib.checkedBigNumberify('./interface.rsh:154:14:dot', stdlib.UInt_max, '0')];
    const v1393 = stdlib.safeAdd(v1392, v1349);
    const v1395 = stdlib.Array_set(v1391, '0', v1393);
    const v1396 = stdlib.Array_set(v1266, stdlib.checkedBigNumberify('./interface.rsh:154:14:dot', stdlib.UInt_max, '0'), v1395);
    ;
    const v1397 = stdlib.safeAdd(v1259, v1357);
    const v1401 = stdlib.safeSub(v1388, v1397);
    ;
    const v1405 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '0')];
    const v1407 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '1')];
    const v1409 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '2')];
    const v1411 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '3')];
    const v1413 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '4')];
    const v1415 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '5')];
    const v1417 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '6')];
    const v1419 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '7')];
    const v1421 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '8')];
    const v1425 = stdlib.safeAdd(v1405, v1407);
    const v1426 = stdlib.safeAdd(v1425, v1409);
    const v1427 = stdlib.safeAdd(v1426, v1411);
    const v1428 = stdlib.safeAdd(v1427, v1413);
    const v1429 = stdlib.safeAdd(v1428, v1415);
    const v1430 = stdlib.safeAdd(v1429, v1417);
    const v1431 = stdlib.safeAdd(v1430, v1419);
    const v1432 = stdlib.safeAdd(v1431, v1421);
    const v1434 = stdlib.safeSub(v1350, v1351);
    const v1435 = stdlib.safeSub(v1352, v1360);
    const v1443 = stdlib.safeMul(v1434, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
    const v1448 = stdlib.safeDiv(v1443, v1435);
    const v1457 = stdlib.safeDiv(v1448, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
    const v1458 = [v1348, v1261, v1349, v1350, v1350, v1351, false, v1352, v1457, v1353, v1354, v1355, v1348];
    let v1459 = stdlib.checkedBigNumberify('./interface.rsh:222:73:decimal', stdlib.UInt_max, '0');
    let v1460 = v1458;
    let v1461 = v1347;
    let v1462 = v1359;
    let v1468 = v1396;
    let v1469 = v1401;
    
    while (await (async () => {
      const v1552 = v1460[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '6')];
      const v1578 = v1552 ? false : true;
      
      return v1578;})()) {
      const v1582 = v1460[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '3')];
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 7,
        out_tys: [ctc6],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1644], secs: v1646, time: v1645, didSend: v875, from: v1643 } = txn3;
      switch (v1644[0]) {
        case 'acceptOffer0_698': {
          const v1647 = v1644[1];
          undefined /* setApiDetails */;
          const v1656 = stdlib.safeAdd(v1469, v1582);
          ;
          const v1658 = null;
          await txn3.getOutput('acceptOffer', 'v1658', ctc7, v1658);
          const v1665 = stdlib.safeSub(v1646, v1360);
          const v1666 = stdlib.safeMul(v1665, v1448);
          const v1667 = stdlib.safeDiv(v1666, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
          const v1669 = stdlib.lt(v1667, v1434);
          const v1670 = v1669 ? v1667 : v1434;
          let v1671;
          const v1672 = stdlib.le(v1350, v1670);
          if (v1672) {
            v1671 = v1351;
            }
          else {
            const v1673 = stdlib.safeSub(v1350, v1670);
            v1671 = v1673;
            }
          const v1674 = stdlib.gt(v1351, v1671);
          const v1675 = v1674 ? v1351 : v1671;
          const v1677 = stdlib.safeSub(v1582, v1675);
          const v1678 = stdlib.safeDiv(v1675, stdlib.checkedBigNumberify('./interface.rsh:272:30:decimal', stdlib.UInt_max, '100'));
          const v1679 = stdlib.safeSub(v1675, v1678);
          const v1680 = stdlib.safeDiv(v1679, v1355);
          const v1681 = stdlib.safeMul(v1680, v1432);
          const v1683 = stdlib.safeSub(v1679, v1681);
          const v1687 = stdlib.safeSub(v1656, v1678);
          ;
          const v1691 = stdlib.safeSub(v1687, v1683);
          ;
          const v1692 = stdlib.safeAdd(v1356, v1677);
          const v1696 = stdlib.safeSub(v1691, v1692);
          ;
          const v1697 = v1468[stdlib.checkedBigNumberify('./interface.rsh:278:64:application', stdlib.UInt_max, '0')];
          const v1698 = v1697[stdlib.checkedBigNumberify('./interface.rsh:278:64:application', stdlib.UInt_max, '0')];
          const v1702 = stdlib.safeSub(v1698, v1349);
          const v1704 = stdlib.Array_set(v1697, '0', v1702);
          const v1705 = stdlib.Array_set(v1468, stdlib.checkedBigNumberify('./interface.rsh:278:64:application', stdlib.UInt_max, '0'), v1704);
          ;
          const v1706 = stdlib.Array_set(v1460, '6', true);
          const v1707 = stdlib.Array_set(v1706, '3', v1675);
          const cv1459 = v1680;
          const cv1460 = v1707;
          const cv1461 = v1643;
          const cv1462 = v1645;
          const cv1468 = v1705;
          const cv1469 = v1696;
          
          v1459 = cv1459;
          v1460 = cv1460;
          v1461 = cv1461;
          v1462 = cv1462;
          v1468 = cv1468;
          v1469 = cv1469;
          
          continue;
          break;
          }
        case 'cancel0_698': {
          const v1757 = v1644[1];
          undefined /* setApiDetails */;
          ;
          const v1820 = stdlib.addressEq(v1643, v1347);
          stdlib.assert(v1820, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:293:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:296:13:application call to [unknown function] (defined at: ./interface.rsh:296:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
            msg: null,
            who: 'Relay'
            });
          const v1822 = null;
          await txn3.getOutput('cancel', 'v1822', ctc7, v1822);
          const v1831 = stdlib.safeSub(v1469, v1356);
          ;
          const v1832 = v1468[stdlib.checkedBigNumberify('./interface.rsh:298:57:application', stdlib.UInt_max, '0')];
          const v1833 = v1832[stdlib.checkedBigNumberify('./interface.rsh:298:57:application', stdlib.UInt_max, '0')];
          const v1837 = stdlib.safeSub(v1833, v1349);
          const v1839 = stdlib.Array_set(v1832, '0', v1837);
          const v1840 = stdlib.Array_set(v1468, stdlib.checkedBigNumberify('./interface.rsh:298:57:application', stdlib.UInt_max, '0'), v1839);
          ;
          const v1841 = stdlib.Array_set(v1460, '6', true);
          const cv1459 = v1459;
          const cv1460 = v1841;
          const cv1461 = v1461;
          const cv1462 = v1645;
          const cv1468 = v1840;
          const cv1469 = v1831;
          
          v1459 = cv1459;
          v1460 = cv1460;
          v1461 = cv1461;
          v1462 = cv1462;
          v1468 = cv1468;
          v1469 = cv1469;
          
          continue;
          break;
          }
        case 'touch0_698': {
          const v1867 = v1644[1];
          undefined /* setApiDetails */;
          ;
          const v1955 = stdlib.ge(v1582, v1351);
          stdlib.assert(v1955, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:239:13:application call to [unknown function] (defined at: ./interface.rsh:239:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
            msg: null,
            who: 'Relay'
            });
          const v1957 = null;
          await txn3.getOutput('touch', 'v1957', ctc7, v1957);
          const v1964 = stdlib.safeSub(v1646, v1360);
          const v1965 = stdlib.safeMul(v1964, v1448);
          const v1966 = stdlib.safeDiv(v1965, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
          const v1968 = stdlib.lt(v1966, v1434);
          const v1969 = v1968 ? v1966 : v1434;
          let v1970;
          const v1971 = stdlib.le(v1350, v1969);
          if (v1971) {
            v1970 = v1351;
            }
          else {
            const v1972 = stdlib.safeSub(v1350, v1969);
            v1970 = v1972;
            }
          const v1973 = stdlib.gt(v1351, v1970);
          const v1974 = v1973 ? v1351 : v1970;
          const v1975 = stdlib.Array_set(v1460, '3', v1974);
          const cv1459 = v1459;
          const cv1460 = v1975;
          const cv1461 = v1461;
          const cv1462 = v1645;
          const cv1468 = v1468;
          const cv1469 = v1469;
          
          v1459 = cv1459;
          v1460 = cv1460;
          v1461 = cv1461;
          v1462 = cv1462;
          v1468 = cv1468;
          v1469 = cv1469;
          
          continue;
          break;
          }
        }
      
      }
    const v2008 = stdlib.Array_set(v1460, '12', v1461);
    const v2042 = v1468[stdlib.checkedBigNumberify('./interface.rsh:308:19:application', stdlib.UInt_max, '0')];
    const v2043 = v2042[stdlib.checkedBigNumberify('./interface.rsh:308:19:application', stdlib.UInt_max, '0')];
    const v2044 = stdlib.eq(v2043, stdlib.checkedBigNumberify('./interface.rsh:308:30:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2044, {
      at: './interface.rsh:308:11:application',
      fs: ['at ./interface.rsh:307:13:application call to [unknown function] (defined at: ./interface.rsh:307:17:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Relay'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v1261, v1353, v1354, v1432, v1459, v1468, v1469, v2008],
      evt_cnt: 0,
      funcNum: 4,
      lct: v1462,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:313:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v2047, time: v2046, didSend: v1079, from: v2045 } = txn3;
        
        ;
        const v2052 = stdlib.safeMul(v1459, v1432);
        const v2053 = stdlib.safeSub(v1469, v2052);
        const v2057 = await stdlib.Array_asyncMap([v1354], async([v2054], v2055) => {
          const v2056 = stdlib.safeMul(v2054, v1459);
          
          return v2056;})
        const v2058 = v2057[stdlib.checkedBigNumberify('./interface.rsh:317:20:array ref', stdlib.UInt_max, '0')];
        const v2059 = v1353[stdlib.checkedBigNumberify('./interface.rsh:317:33:array ref', stdlib.UInt_max, '0')];
        sim_r.txns.push({
          kind: 'from',
          to: v2059,
          tok: undefined /* Nothing */
          });
        const v2064 = v2057[stdlib.checkedBigNumberify('./interface.rsh:318:20:array ref', stdlib.UInt_max, '1')];
        const v2065 = v1353[stdlib.checkedBigNumberify('./interface.rsh:318:33:array ref', stdlib.UInt_max, '1')];
        sim_r.txns.push({
          kind: 'from',
          to: v2065,
          tok: undefined /* Nothing */
          });
        const v2070 = v2057[stdlib.checkedBigNumberify('./interface.rsh:319:20:array ref', stdlib.UInt_max, '2')];
        const v2071 = v1353[stdlib.checkedBigNumberify('./interface.rsh:319:33:array ref', stdlib.UInt_max, '2')];
        sim_r.txns.push({
          kind: 'from',
          to: v2071,
          tok: undefined /* Nothing */
          });
        const v2076 = v2057[stdlib.checkedBigNumberify('./interface.rsh:320:20:array ref', stdlib.UInt_max, '3')];
        const v2077 = v1353[stdlib.checkedBigNumberify('./interface.rsh:320:33:array ref', stdlib.UInt_max, '3')];
        sim_r.txns.push({
          kind: 'from',
          to: v2077,
          tok: undefined /* Nothing */
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc3, ctc4, ctc1, ctc1, ctc11, ctc1, ctc9],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v2047, time: v2046, didSend: v1079, from: v2045 } = txn3;
    ;
    const v2048 = v1468[stdlib.checkedBigNumberify('./interface.rsh:314:18:application', stdlib.UInt_max, '0')];
    const v2049 = v2048[stdlib.checkedBigNumberify('./interface.rsh:314:18:application', stdlib.UInt_max, '0')];
    const v2050 = stdlib.eq(v2049, stdlib.checkedBigNumberify('./interface.rsh:314:29:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2050, {
      at: './interface.rsh:314:10:application',
      fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Relay'
      });
    const v2052 = stdlib.safeMul(v1459, v1432);
    const v2053 = stdlib.safeSub(v1469, v2052);
    const v2057 = await stdlib.Array_asyncMap([v1354], async([v2054], v2055) => {
      const v2056 = stdlib.safeMul(v2054, v1459);
      
      return v2056;})
    const v2058 = v2057[stdlib.checkedBigNumberify('./interface.rsh:317:20:array ref', stdlib.UInt_max, '0')];
    const v2059 = v1353[stdlib.checkedBigNumberify('./interface.rsh:317:33:array ref', stdlib.UInt_max, '0')];
    ;
    const v2064 = v2057[stdlib.checkedBigNumberify('./interface.rsh:318:20:array ref', stdlib.UInt_max, '1')];
    const v2065 = v1353[stdlib.checkedBigNumberify('./interface.rsh:318:33:array ref', stdlib.UInt_max, '1')];
    ;
    const v2070 = v2057[stdlib.checkedBigNumberify('./interface.rsh:319:20:array ref', stdlib.UInt_max, '2')];
    const v2071 = v1353[stdlib.checkedBigNumberify('./interface.rsh:319:33:array ref', stdlib.UInt_max, '2')];
    ;
    const v2076 = v2057[stdlib.checkedBigNumberify('./interface.rsh:320:20:array ref', stdlib.UInt_max, '3')];
    const v2077 = v1353[stdlib.checkedBigNumberify('./interface.rsh:320:33:array ref', stdlib.UInt_max, '3')];
    ;
    const txn4 = await (ctc.sendrecv({
      args: [v1261, v1353, v2008, v2053, v2057],
      evt_cnt: 0,
      funcNum: 5,
      lct: v2046,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:325:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v2084, time: v2083, didSend: v1118, from: v2082 } = txn4;
        
        ;
        const v2085 = v2057[stdlib.checkedBigNumberify('./interface.rsh:326:20:array ref', stdlib.UInt_max, '4')];
        const v2086 = v1353[stdlib.checkedBigNumberify('./interface.rsh:326:33:array ref', stdlib.UInt_max, '4')];
        sim_r.txns.push({
          kind: 'from',
          to: v2086,
          tok: undefined /* Nothing */
          });
        const v2091 = v2057[stdlib.checkedBigNumberify('./interface.rsh:327:20:array ref', stdlib.UInt_max, '5')];
        const v2092 = v1353[stdlib.checkedBigNumberify('./interface.rsh:327:33:array ref', stdlib.UInt_max, '5')];
        sim_r.txns.push({
          kind: 'from',
          to: v2092,
          tok: undefined /* Nothing */
          });
        const v2097 = v2057[stdlib.checkedBigNumberify('./interface.rsh:328:20:array ref', stdlib.UInt_max, '6')];
        const v2098 = v1353[stdlib.checkedBigNumberify('./interface.rsh:328:33:array ref', stdlib.UInt_max, '6')];
        sim_r.txns.push({
          kind: 'from',
          to: v2098,
          tok: undefined /* Nothing */
          });
        const v2103 = v2057[stdlib.checkedBigNumberify('./interface.rsh:329:20:array ref', stdlib.UInt_max, '7')];
        const v2104 = v1353[stdlib.checkedBigNumberify('./interface.rsh:329:33:array ref', stdlib.UInt_max, '7')];
        sim_r.txns.push({
          kind: 'from',
          to: v2104,
          tok: undefined /* Nothing */
          });
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc3, ctc9, ctc1, ctc4],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v2084, time: v2083, didSend: v1118, from: v2082 } = txn4;
    ;
    const v2085 = v2057[stdlib.checkedBigNumberify('./interface.rsh:326:20:array ref', stdlib.UInt_max, '4')];
    const v2086 = v1353[stdlib.checkedBigNumberify('./interface.rsh:326:33:array ref', stdlib.UInt_max, '4')];
    ;
    const v2091 = v2057[stdlib.checkedBigNumberify('./interface.rsh:327:20:array ref', stdlib.UInt_max, '5')];
    const v2092 = v1353[stdlib.checkedBigNumberify('./interface.rsh:327:33:array ref', stdlib.UInt_max, '5')];
    ;
    const v2097 = v2057[stdlib.checkedBigNumberify('./interface.rsh:328:20:array ref', stdlib.UInt_max, '6')];
    const v2098 = v1353[stdlib.checkedBigNumberify('./interface.rsh:328:33:array ref', stdlib.UInt_max, '6')];
    ;
    const v2103 = v2057[stdlib.checkedBigNumberify('./interface.rsh:329:20:array ref', stdlib.UInt_max, '7')];
    const v2104 = v1353[stdlib.checkedBigNumberify('./interface.rsh:329:33:array ref', stdlib.UInt_max, '7')];
    ;
    const v2109 = ctc.selfAddress();
    
    const txn5 = await (ctc.sendrecv({
      args: [v1261, v1353, v2008, v2053, v2057, v2109],
      evt_cnt: 1,
      funcNum: 6,
      lct: v2083,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:337:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v2112], secs: v2114, time: v2113, didSend: v1150, from: v2111 } = txn5;
        
        ;
        const v2115 = v2057[stdlib.checkedBigNumberify('./interface.rsh:338:20:array ref', stdlib.UInt_max, '8')];
        const v2116 = v1353[stdlib.checkedBigNumberify('./interface.rsh:338:33:array ref', stdlib.UInt_max, '8')];
        sim_r.txns.push({
          kind: 'from',
          to: v2116,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v2112,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v1261
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc3, ctc9, ctc1, ctc4, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v2112], secs: v2114, time: v2113, didSend: v1150, from: v2111 } = txn5;
    ;
    const v2115 = v2057[stdlib.checkedBigNumberify('./interface.rsh:338:20:array ref', stdlib.UInt_max, '8')];
    const v2116 = v1353[stdlib.checkedBigNumberify('./interface.rsh:338:33:array ref', stdlib.UInt_max, '8')];
    ;
    ;
    return;
    
    
    
    
    
    
    }
  
  
  
  };
export async function Verifier(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Verifier expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Verifier expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc4 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    acceptOffer0_698: ctc5,
    cancel0_698: ctc5,
    touch0_698: ctc5
    });
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v1240 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1241 = [v1240];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1258, v1259, v1260, v1261], secs: v1263, time: v1262, didSend: v46, from: v1257 } = txn1;
  const v1264 = v1241[stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0')];
  const v1265 = stdlib.Array_set(v1264, '0', stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'));
  const v1266 = stdlib.Array_set(v1241, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'), v1265);
  ;
  ;
  const v1276 = stdlib.safeAdd(v1262, v1260);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 11,
    funcNum: 1,
    out_tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc3, ctc4, ctc1, ctc1, ctc1, ctc1],
    timeoutAt: ['time', v1276],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v1258, v1259, v1261, v1266, v1276],
      evt_cnt: 0,
      funcNum: 2,
      lct: v1262,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:185:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v2132, time: v2131, didSend: v1180, from: v2130 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v1261
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc1, ctc2, ctc10, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v2132, time: v2131, didSend: v1180, from: v2130 } = txn3;
    ;
    return;
    
    }
  else {
    const {data: [v1348, v1349, v1350, v1351, v1352, v1353, v1354, v1355, v1356, v1357, v1358], secs: v1360, time: v1359, didSend: v425, from: v1347 } = txn2;
    const v1361 = stdlib.gt(v1349, stdlib.checkedBigNumberify('./interface.rsh:168:27:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v1361, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:168:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Verifier'
      });
    const v1363 = stdlib.gt(v1351, stdlib.checkedBigNumberify('./interface.rsh:169:26:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v1363, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Verifier'
      });
    const v1365 = stdlib.le(v1351, v1350);
    stdlib.assert(v1365, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Verifier'
      });
    const v1367 = stdlib.gt(v1352, stdlib.checkedBigNumberify('./interface.rsh:171:23:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v1367, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:171:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Verifier'
      });
    const v1369 = await stdlib.Array_asyncReduce([v1354], stdlib.checkedBigNumberify('reach standard library:147:19:decimal', stdlib.UInt_max, '0'), async([v1371], v1370, v1372) => {
      const v1373 = stdlib.safeAdd(v1370, v1371);
      
      return v1373;})
    const v1374 = stdlib.le(v1369, v1355);
    stdlib.assert(v1374, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:173:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Verifier'
      });
    const v1376 = stdlib.safeMul(stdlib.checkedBigNumberify('./interface.rsh:174:28:decimal', stdlib.UInt_max, '10'), v1351);
    const v1377 = stdlib.safeDiv(v1376, stdlib.checkedBigNumberify('./interface.rsh:174:47:decimal', stdlib.UInt_max, '1000000'));
    const v1378 = stdlib.eq(v1355, v1377);
    stdlib.assert(v1378, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:174:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Verifier'
      });
    const v1380 = stdlib.ge(v1356, stdlib.checkedBigNumberify('./interface.rsh:21:24:decimal', stdlib.UInt_max, '6000'));
    stdlib.assert(v1380, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Verifier'
      });
    const v1382 = stdlib.ge(v1357, stdlib.checkedBigNumberify('./interface.rsh:22:27:decimal', stdlib.UInt_max, '5000'));
    stdlib.assert(v1382, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Verifier'
      });
    const v1384 = stdlib.ge(v1358, stdlib.checkedBigNumberify('./interface.rsh:23:23:decimal', stdlib.UInt_max, '17000'));
    stdlib.assert(v1384, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:177:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Verifier'
      });
    const v1386 = stdlib.safeAdd(v1357, v1356);
    const v1387 = stdlib.safeAdd(v1386, v1358);
    const v1388 = stdlib.safeAdd(v1259, v1387);
    ;
    const v1391 = v1266[stdlib.checkedBigNumberify('./interface.rsh:154:14:dot', stdlib.UInt_max, '0')];
    const v1392 = v1391[stdlib.checkedBigNumberify('./interface.rsh:154:14:dot', stdlib.UInt_max, '0')];
    const v1393 = stdlib.safeAdd(v1392, v1349);
    const v1395 = stdlib.Array_set(v1391, '0', v1393);
    const v1396 = stdlib.Array_set(v1266, stdlib.checkedBigNumberify('./interface.rsh:154:14:dot', stdlib.UInt_max, '0'), v1395);
    ;
    const v1397 = stdlib.safeAdd(v1259, v1357);
    const v1401 = stdlib.safeSub(v1388, v1397);
    ;
    const v1405 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '0')];
    const v1407 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '1')];
    const v1409 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '2')];
    const v1411 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '3')];
    const v1413 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '4')];
    const v1415 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '5')];
    const v1417 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '6')];
    const v1419 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '7')];
    const v1421 = v1354[stdlib.checkedBigNumberify('reach standard library:566:31:array ref', stdlib.UInt_max, '8')];
    const v1425 = stdlib.safeAdd(v1405, v1407);
    const v1426 = stdlib.safeAdd(v1425, v1409);
    const v1427 = stdlib.safeAdd(v1426, v1411);
    const v1428 = stdlib.safeAdd(v1427, v1413);
    const v1429 = stdlib.safeAdd(v1428, v1415);
    const v1430 = stdlib.safeAdd(v1429, v1417);
    const v1431 = stdlib.safeAdd(v1430, v1419);
    const v1432 = stdlib.safeAdd(v1431, v1421);
    const v1434 = stdlib.safeSub(v1350, v1351);
    const v1435 = stdlib.safeSub(v1352, v1360);
    const v1443 = stdlib.safeMul(v1434, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
    const v1448 = stdlib.safeDiv(v1443, v1435);
    const v1457 = stdlib.safeDiv(v1448, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
    const v1458 = [v1348, v1261, v1349, v1350, v1350, v1351, false, v1352, v1457, v1353, v1354, v1355, v1348];
    let v1459 = stdlib.checkedBigNumberify('./interface.rsh:222:73:decimal', stdlib.UInt_max, '0');
    let v1460 = v1458;
    let v1461 = v1347;
    let v1462 = v1359;
    let v1468 = v1396;
    let v1469 = v1401;
    
    while (await (async () => {
      const v1552 = v1460[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '6')];
      const v1578 = v1552 ? false : true;
      
      return v1578;})()) {
      const v1582 = v1460[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '3')];
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 7,
        out_tys: [ctc6],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1644], secs: v1646, time: v1645, didSend: v875, from: v1643 } = txn3;
      switch (v1644[0]) {
        case 'acceptOffer0_698': {
          const v1647 = v1644[1];
          undefined /* setApiDetails */;
          const v1656 = stdlib.safeAdd(v1469, v1582);
          ;
          const v1658 = null;
          await txn3.getOutput('acceptOffer', 'v1658', ctc7, v1658);
          const v1665 = stdlib.safeSub(v1646, v1360);
          const v1666 = stdlib.safeMul(v1665, v1448);
          const v1667 = stdlib.safeDiv(v1666, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
          const v1669 = stdlib.lt(v1667, v1434);
          const v1670 = v1669 ? v1667 : v1434;
          let v1671;
          const v1672 = stdlib.le(v1350, v1670);
          if (v1672) {
            v1671 = v1351;
            }
          else {
            const v1673 = stdlib.safeSub(v1350, v1670);
            v1671 = v1673;
            }
          const v1674 = stdlib.gt(v1351, v1671);
          const v1675 = v1674 ? v1351 : v1671;
          const v1677 = stdlib.safeSub(v1582, v1675);
          const v1678 = stdlib.safeDiv(v1675, stdlib.checkedBigNumberify('./interface.rsh:272:30:decimal', stdlib.UInt_max, '100'));
          const v1679 = stdlib.safeSub(v1675, v1678);
          const v1680 = stdlib.safeDiv(v1679, v1355);
          const v1681 = stdlib.safeMul(v1680, v1432);
          const v1683 = stdlib.safeSub(v1679, v1681);
          const v1687 = stdlib.safeSub(v1656, v1678);
          ;
          const v1691 = stdlib.safeSub(v1687, v1683);
          ;
          const v1692 = stdlib.safeAdd(v1356, v1677);
          const v1696 = stdlib.safeSub(v1691, v1692);
          ;
          const v1697 = v1468[stdlib.checkedBigNumberify('./interface.rsh:278:64:application', stdlib.UInt_max, '0')];
          const v1698 = v1697[stdlib.checkedBigNumberify('./interface.rsh:278:64:application', stdlib.UInt_max, '0')];
          const v1702 = stdlib.safeSub(v1698, v1349);
          const v1704 = stdlib.Array_set(v1697, '0', v1702);
          const v1705 = stdlib.Array_set(v1468, stdlib.checkedBigNumberify('./interface.rsh:278:64:application', stdlib.UInt_max, '0'), v1704);
          ;
          const v1706 = stdlib.Array_set(v1460, '6', true);
          const v1707 = stdlib.Array_set(v1706, '3', v1675);
          const cv1459 = v1680;
          const cv1460 = v1707;
          const cv1461 = v1643;
          const cv1462 = v1645;
          const cv1468 = v1705;
          const cv1469 = v1696;
          
          v1459 = cv1459;
          v1460 = cv1460;
          v1461 = cv1461;
          v1462 = cv1462;
          v1468 = cv1468;
          v1469 = cv1469;
          
          continue;
          break;
          }
        case 'cancel0_698': {
          const v1757 = v1644[1];
          undefined /* setApiDetails */;
          ;
          const v1820 = stdlib.addressEq(v1643, v1347);
          stdlib.assert(v1820, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:293:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:296:13:application call to [unknown function] (defined at: ./interface.rsh:296:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
            msg: null,
            who: 'Verifier'
            });
          const v1822 = null;
          await txn3.getOutput('cancel', 'v1822', ctc7, v1822);
          const v1831 = stdlib.safeSub(v1469, v1356);
          ;
          const v1832 = v1468[stdlib.checkedBigNumberify('./interface.rsh:298:57:application', stdlib.UInt_max, '0')];
          const v1833 = v1832[stdlib.checkedBigNumberify('./interface.rsh:298:57:application', stdlib.UInt_max, '0')];
          const v1837 = stdlib.safeSub(v1833, v1349);
          const v1839 = stdlib.Array_set(v1832, '0', v1837);
          const v1840 = stdlib.Array_set(v1468, stdlib.checkedBigNumberify('./interface.rsh:298:57:application', stdlib.UInt_max, '0'), v1839);
          ;
          const v1841 = stdlib.Array_set(v1460, '6', true);
          const cv1459 = v1459;
          const cv1460 = v1841;
          const cv1461 = v1461;
          const cv1462 = v1645;
          const cv1468 = v1840;
          const cv1469 = v1831;
          
          v1459 = cv1459;
          v1460 = cv1460;
          v1461 = cv1461;
          v1462 = cv1462;
          v1468 = cv1468;
          v1469 = cv1469;
          
          continue;
          break;
          }
        case 'touch0_698': {
          const v1867 = v1644[1];
          undefined /* setApiDetails */;
          ;
          const v1955 = stdlib.ge(v1582, v1351);
          stdlib.assert(v1955, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:239:13:application call to [unknown function] (defined at: ./interface.rsh:239:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
            msg: null,
            who: 'Verifier'
            });
          const v1957 = null;
          await txn3.getOutput('touch', 'v1957', ctc7, v1957);
          const v1964 = stdlib.safeSub(v1646, v1360);
          const v1965 = stdlib.safeMul(v1964, v1448);
          const v1966 = stdlib.safeDiv(v1965, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
          const v1968 = stdlib.lt(v1966, v1434);
          const v1969 = v1968 ? v1966 : v1434;
          let v1970;
          const v1971 = stdlib.le(v1350, v1969);
          if (v1971) {
            v1970 = v1351;
            }
          else {
            const v1972 = stdlib.safeSub(v1350, v1969);
            v1970 = v1972;
            }
          const v1973 = stdlib.gt(v1351, v1970);
          const v1974 = v1973 ? v1351 : v1970;
          const v1975 = stdlib.Array_set(v1460, '3', v1974);
          const cv1459 = v1459;
          const cv1460 = v1975;
          const cv1461 = v1461;
          const cv1462 = v1645;
          const cv1468 = v1468;
          const cv1469 = v1469;
          
          v1459 = cv1459;
          v1460 = cv1460;
          v1461 = cv1461;
          v1462 = cv1462;
          v1468 = cv1468;
          v1469 = cv1469;
          
          continue;
          break;
          }
        }
      
      }
    const v2008 = stdlib.Array_set(v1460, '12', v1461);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v2047, time: v2046, didSend: v1079, from: v2045 } = txn3;
    ;
    const v2048 = v1468[stdlib.checkedBigNumberify('./interface.rsh:314:18:application', stdlib.UInt_max, '0')];
    const v2049 = v2048[stdlib.checkedBigNumberify('./interface.rsh:314:18:application', stdlib.UInt_max, '0')];
    const v2050 = stdlib.eq(v2049, stdlib.checkedBigNumberify('./interface.rsh:314:29:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2050, {
      at: './interface.rsh:314:10:application',
      fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
      msg: null,
      who: 'Verifier'
      });
    const v2052 = stdlib.safeMul(v1459, v1432);
    const v2053 = stdlib.safeSub(v1469, v2052);
    const v2057 = await stdlib.Array_asyncMap([v1354], async([v2054], v2055) => {
      const v2056 = stdlib.safeMul(v2054, v1459);
      
      return v2056;})
    const v2058 = v2057[stdlib.checkedBigNumberify('./interface.rsh:317:20:array ref', stdlib.UInt_max, '0')];
    const v2059 = v1353[stdlib.checkedBigNumberify('./interface.rsh:317:33:array ref', stdlib.UInt_max, '0')];
    ;
    const v2064 = v2057[stdlib.checkedBigNumberify('./interface.rsh:318:20:array ref', stdlib.UInt_max, '1')];
    const v2065 = v1353[stdlib.checkedBigNumberify('./interface.rsh:318:33:array ref', stdlib.UInt_max, '1')];
    ;
    const v2070 = v2057[stdlib.checkedBigNumberify('./interface.rsh:319:20:array ref', stdlib.UInt_max, '2')];
    const v2071 = v1353[stdlib.checkedBigNumberify('./interface.rsh:319:33:array ref', stdlib.UInt_max, '2')];
    ;
    const v2076 = v2057[stdlib.checkedBigNumberify('./interface.rsh:320:20:array ref', stdlib.UInt_max, '3')];
    const v2077 = v1353[stdlib.checkedBigNumberify('./interface.rsh:320:33:array ref', stdlib.UInt_max, '3')];
    ;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 5,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v2084, time: v2083, didSend: v1118, from: v2082 } = txn4;
    ;
    const v2085 = v2057[stdlib.checkedBigNumberify('./interface.rsh:326:20:array ref', stdlib.UInt_max, '4')];
    const v2086 = v1353[stdlib.checkedBigNumberify('./interface.rsh:326:33:array ref', stdlib.UInt_max, '4')];
    ;
    const v2091 = v2057[stdlib.checkedBigNumberify('./interface.rsh:327:20:array ref', stdlib.UInt_max, '5')];
    const v2092 = v1353[stdlib.checkedBigNumberify('./interface.rsh:327:33:array ref', stdlib.UInt_max, '5')];
    ;
    const v2097 = v2057[stdlib.checkedBigNumberify('./interface.rsh:328:20:array ref', stdlib.UInt_max, '6')];
    const v2098 = v1353[stdlib.checkedBigNumberify('./interface.rsh:328:33:array ref', stdlib.UInt_max, '6')];
    ;
    const v2103 = v2057[stdlib.checkedBigNumberify('./interface.rsh:329:20:array ref', stdlib.UInt_max, '7')];
    const v2104 = v1353[stdlib.checkedBigNumberify('./interface.rsh:329:33:array ref', stdlib.UInt_max, '7')];
    ;
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2112], secs: v2114, time: v2113, didSend: v1150, from: v2111 } = txn5;
    ;
    const v2115 = v2057[stdlib.checkedBigNumberify('./interface.rsh:338:20:array ref', stdlib.UInt_max, '8')];
    const v2116 = v1353[stdlib.checkedBigNumberify('./interface.rsh:338:33:array ref', stdlib.UInt_max, '8')];
    ;
    ;
    return;
    
    
    
    
    
    
    }
  
  
  
  };
export async function _acceptOffer8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _acceptOffer8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _acceptOffer8 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc4 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc2, ctc3, ctc4, ctc2, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2, ctc5]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    acceptOffer0_698: ctc9,
    cancel0_698: ctc9,
    touch0_698: ctc9
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v1258, v1261, v1347, v1349, v1350, v1351, v1353, v1354, v1355, v1356, v1360, v1432, v1434, v1448, v1459, v1460, v1461, v1468, v1469, v1582] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc0, ctc1, ctc0, ctc2, ctc2, ctc2, ctc3, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc6, ctc0, ctc8, ctc2, ctc2]);
  const v1623 = stdlib.protect(ctc9, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:259:29:application call to [unknown function] (defined at: ./interface.rsh:259:29:function exp)', 'at ./interface.rsh:222:45:application call to "runacceptOffer0_698" (defined at: ./interface.rsh:259:10:function exp)', 'at ./interface.rsh:222:45:application call to [unknown function] (defined at: ./interface.rsh:222:45:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: 'in',
    who: 'acceptOffer'
    });
  const v1627 = ['acceptOffer0_698', v1623];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1258, v1261, v1347, v1349, v1350, v1351, v1353, v1354, v1355, v1356, v1360, v1432, v1434, v1448, v1459, v1460, v1461, v1468, v1469, v1582, v1627],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [v1582, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1644], secs: v1646, time: v1645, didSend: v875, from: v1643 } = txn1;
      
      switch (v1644[0]) {
        case 'acceptOffer0_698': {
          const v1647 = v1644[1];
          sim_r.txns.push({
            kind: 'api',
            who: "acceptOffer"
            });
          const v1656 = stdlib.safeAdd(v1469, v1582);
          sim_r.txns.push({
            amt: v1582,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1658 = null;
          const v1659 = await txn1.getOutput('acceptOffer', 'v1658', ctc11, v1658);
          
          const v1665 = stdlib.safeSub(v1646, v1360);
          const v1666 = stdlib.safeMul(v1665, v1448);
          const v1667 = stdlib.safeDiv(v1666, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
          const v1669 = stdlib.lt(v1667, v1434);
          const v1670 = v1669 ? v1667 : v1434;
          let v1671;
          const v1672 = stdlib.le(v1350, v1670);
          if (v1672) {
            v1671 = v1351;
            }
          else {
            const v1673 = stdlib.safeSub(v1350, v1670);
            v1671 = v1673;
            }
          const v1674 = stdlib.gt(v1351, v1671);
          const v1675 = v1674 ? v1351 : v1671;
          const v1677 = stdlib.safeSub(v1582, v1675);
          const v1678 = stdlib.safeDiv(v1675, stdlib.checkedBigNumberify('./interface.rsh:272:30:decimal', stdlib.UInt_max, '100'));
          const v1679 = stdlib.safeSub(v1675, v1678);
          const v1680 = stdlib.safeDiv(v1679, v1355);
          const v1681 = stdlib.safeMul(v1680, v1432);
          const v1683 = stdlib.safeSub(v1679, v1681);
          const v1687 = stdlib.safeSub(v1656, v1678);
          sim_r.txns.push({
            kind: 'from',
            to: v1258,
            tok: undefined /* Nothing */
            });
          const v1691 = stdlib.safeSub(v1687, v1683);
          sim_r.txns.push({
            kind: 'from',
            to: v1347,
            tok: undefined /* Nothing */
            });
          const v1692 = stdlib.safeAdd(v1356, v1677);
          const v1696 = stdlib.safeSub(v1691, v1692);
          sim_r.txns.push({
            kind: 'from',
            to: v1643,
            tok: undefined /* Nothing */
            });
          const v1697 = v1468[stdlib.checkedBigNumberify('./interface.rsh:278:64:application', stdlib.UInt_max, '0')];
          const v1698 = v1697[stdlib.checkedBigNumberify('./interface.rsh:278:64:application', stdlib.UInt_max, '0')];
          const v1702 = stdlib.safeSub(v1698, v1349);
          const v1704 = stdlib.Array_set(v1697, '0', v1702);
          const v1705 = stdlib.Array_set(v1468, stdlib.checkedBigNumberify('./interface.rsh:278:64:application', stdlib.UInt_max, '0'), v1704);
          sim_r.txns.push({
            kind: 'from',
            to: v1643,
            tok: v1261
            });
          const v1706 = stdlib.Array_set(v1460, '6', true);
          const v1707 = stdlib.Array_set(v1706, '3', v1675);
          const v3118 = v1680;
          const v3119 = v1707;
          const v3120 = v1643;
          const v3122 = v1705;
          const v3123 = v1696;
          const v3124 = v1707[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '6')];
          if (v3124) {
            const v3127 = stdlib.Array_set(v1707, '12', v1643);
            sim_r.isHalt = false;
            }
          else {
            const v3126 = v1707[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '3')];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'cancel0_698': {
          const v1757 = v1644[1];
          
          break;
          }
        case 'touch0_698': {
          const v1867 = v1644[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0, ctc2, ctc2, ctc2, ctc3, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc6, ctc0, ctc8, ctc2, ctc2, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1644], secs: v1646, time: v1645, didSend: v875, from: v1643 } = txn1;
  switch (v1644[0]) {
    case 'acceptOffer0_698': {
      const v1647 = v1644[1];
      undefined /* setApiDetails */;
      const v1656 = stdlib.safeAdd(v1469, v1582);
      ;
      const v1658 = null;
      const v1659 = await txn1.getOutput('acceptOffer', 'v1658', ctc11, v1658);
      if (v875) {
        stdlib.protect(ctc11, await interact.out(v1647, v1659), {
          at: './interface.rsh:259:11:application',
          fs: ['at ./interface.rsh:259:11:application call to [unknown function] (defined at: ./interface.rsh:259:11:function exp)', 'at ./interface.rsh:263:12:application call to "k" (defined at: ./interface.rsh:262:13:function exp)', 'at ./interface.rsh:262:13:application call to [unknown function] (defined at: ./interface.rsh:262:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
          msg: 'out',
          who: 'acceptOffer'
          });
        }
      else {
        }
      
      const v1665 = stdlib.safeSub(v1646, v1360);
      const v1666 = stdlib.safeMul(v1665, v1448);
      const v1667 = stdlib.safeDiv(v1666, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
      const v1669 = stdlib.lt(v1667, v1434);
      const v1670 = v1669 ? v1667 : v1434;
      let v1671;
      const v1672 = stdlib.le(v1350, v1670);
      if (v1672) {
        v1671 = v1351;
        }
      else {
        const v1673 = stdlib.safeSub(v1350, v1670);
        v1671 = v1673;
        }
      const v1674 = stdlib.gt(v1351, v1671);
      const v1675 = v1674 ? v1351 : v1671;
      const v1677 = stdlib.safeSub(v1582, v1675);
      const v1678 = stdlib.safeDiv(v1675, stdlib.checkedBigNumberify('./interface.rsh:272:30:decimal', stdlib.UInt_max, '100'));
      const v1679 = stdlib.safeSub(v1675, v1678);
      const v1680 = stdlib.safeDiv(v1679, v1355);
      const v1681 = stdlib.safeMul(v1680, v1432);
      const v1683 = stdlib.safeSub(v1679, v1681);
      const v1687 = stdlib.safeSub(v1656, v1678);
      ;
      const v1691 = stdlib.safeSub(v1687, v1683);
      ;
      const v1692 = stdlib.safeAdd(v1356, v1677);
      const v1696 = stdlib.safeSub(v1691, v1692);
      ;
      const v1697 = v1468[stdlib.checkedBigNumberify('./interface.rsh:278:64:application', stdlib.UInt_max, '0')];
      const v1698 = v1697[stdlib.checkedBigNumberify('./interface.rsh:278:64:application', stdlib.UInt_max, '0')];
      const v1702 = stdlib.safeSub(v1698, v1349);
      const v1704 = stdlib.Array_set(v1697, '0', v1702);
      const v1705 = stdlib.Array_set(v1468, stdlib.checkedBigNumberify('./interface.rsh:278:64:application', stdlib.UInt_max, '0'), v1704);
      ;
      const v1706 = stdlib.Array_set(v1460, '6', true);
      const v1707 = stdlib.Array_set(v1706, '3', v1675);
      const v3118 = v1680;
      const v3119 = v1707;
      const v3120 = v1643;
      const v3122 = v1705;
      const v3123 = v1696;
      const v3124 = v1707[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '6')];
      if (v3124) {
        const v3127 = stdlib.Array_set(v1707, '12', v1643);
        return;
        }
      else {
        const v3126 = v1707[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '3')];
        return;
        }
      break;
      }
    case 'cancel0_698': {
      const v1757 = v1644[1];
      return;
      break;
      }
    case 'touch0_698': {
      const v1867 = v1644[1];
      return;
      break;
      }
    }
  
  
  };
export async function _cancel8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _cancel8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _cancel8 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc4 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc2, ctc3, ctc4, ctc2, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2, ctc5]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    acceptOffer0_698: ctc9,
    cancel0_698: ctc9,
    touch0_698: ctc9
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v1258, v1261, v1347, v1349, v1350, v1351, v1353, v1354, v1355, v1356, v1360, v1432, v1434, v1448, v1459, v1460, v1461, v1468, v1469, v1582] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc0, ctc1, ctc0, ctc2, ctc2, ctc2, ctc3, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc6, ctc0, ctc8, ctc2, ctc2]);
  const v1629 = ctc.selfAddress();
  const v1631 = stdlib.protect(ctc9, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:292:24:application call to [unknown function] (defined at: ./interface.rsh:292:24:function exp)', 'at ./interface.rsh:222:45:application call to "runcancel0_698" (defined at: ./interface.rsh:292:10:function exp)', 'at ./interface.rsh:222:45:application call to [unknown function] (defined at: ./interface.rsh:222:45:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: 'in',
    who: 'cancel'
    });
  const v1632 = stdlib.addressEq(v1629, v1347);
  stdlib.assert(v1632, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:293:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:292:24:application call to [unknown function] (defined at: ./interface.rsh:292:24:function exp)', 'at ./interface.rsh:222:45:application call to "runcancel0_698" (defined at: ./interface.rsh:292:10:function exp)', 'at ./interface.rsh:222:45:application call to [unknown function] (defined at: ./interface.rsh:222:45:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: null,
    who: 'cancel'
    });
  const v1637 = ['cancel0_698', v1631];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1258, v1261, v1347, v1349, v1350, v1351, v1353, v1354, v1355, v1356, v1360, v1432, v1434, v1448, v1459, v1460, v1461, v1468, v1469, v1582, v1637],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:292:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1644], secs: v1646, time: v1645, didSend: v875, from: v1643 } = txn1;
      
      switch (v1644[0]) {
        case 'acceptOffer0_698': {
          const v1647 = v1644[1];
          
          break;
          }
        case 'cancel0_698': {
          const v1757 = v1644[1];
          sim_r.txns.push({
            kind: 'api',
            who: "cancel"
            });
          ;
          const v1822 = null;
          const v1823 = await txn1.getOutput('cancel', 'v1822', ctc11, v1822);
          
          const v1831 = stdlib.safeSub(v1469, v1356);
          sim_r.txns.push({
            kind: 'from',
            to: v1643,
            tok: undefined /* Nothing */
            });
          const v1832 = v1468[stdlib.checkedBigNumberify('./interface.rsh:298:57:application', stdlib.UInt_max, '0')];
          const v1833 = v1832[stdlib.checkedBigNumberify('./interface.rsh:298:57:application', stdlib.UInt_max, '0')];
          const v1837 = stdlib.safeSub(v1833, v1349);
          const v1839 = stdlib.Array_set(v1832, '0', v1837);
          const v1840 = stdlib.Array_set(v1468, stdlib.checkedBigNumberify('./interface.rsh:298:57:application', stdlib.UInt_max, '0'), v1839);
          sim_r.txns.push({
            kind: 'from',
            to: v1643,
            tok: v1261
            });
          const v1841 = stdlib.Array_set(v1460, '6', true);
          const v3318 = v1459;
          const v3319 = v1841;
          const v3320 = v1461;
          const v3322 = v1840;
          const v3323 = v1831;
          const v3324 = v1841[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '6')];
          if (v3324) {
            const v3327 = stdlib.Array_set(v1841, '12', v1461);
            sim_r.isHalt = false;
            }
          else {
            const v3326 = v1841[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '3')];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'touch0_698': {
          const v1867 = v1644[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0, ctc2, ctc2, ctc2, ctc3, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc6, ctc0, ctc8, ctc2, ctc2, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1644], secs: v1646, time: v1645, didSend: v875, from: v1643 } = txn1;
  switch (v1644[0]) {
    case 'acceptOffer0_698': {
      const v1647 = v1644[1];
      return;
      break;
      }
    case 'cancel0_698': {
      const v1757 = v1644[1];
      undefined /* setApiDetails */;
      ;
      const v1820 = stdlib.addressEq(v1643, v1347);
      stdlib.assert(v1820, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:293:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:296:13:application call to [unknown function] (defined at: ./interface.rsh:296:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
        msg: null,
        who: 'cancel'
        });
      const v1822 = null;
      const v1823 = await txn1.getOutput('cancel', 'v1822', ctc11, v1822);
      if (v875) {
        stdlib.protect(ctc11, await interact.out(v1757, v1823), {
          at: './interface.rsh:292:11:application',
          fs: ['at ./interface.rsh:292:11:application call to [unknown function] (defined at: ./interface.rsh:292:11:function exp)', 'at ./interface.rsh:297:12:application call to "k" (defined at: ./interface.rsh:296:13:function exp)', 'at ./interface.rsh:296:13:application call to [unknown function] (defined at: ./interface.rsh:296:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
          msg: 'out',
          who: 'cancel'
          });
        }
      else {
        }
      
      const v1831 = stdlib.safeSub(v1469, v1356);
      ;
      const v1832 = v1468[stdlib.checkedBigNumberify('./interface.rsh:298:57:application', stdlib.UInt_max, '0')];
      const v1833 = v1832[stdlib.checkedBigNumberify('./interface.rsh:298:57:application', stdlib.UInt_max, '0')];
      const v1837 = stdlib.safeSub(v1833, v1349);
      const v1839 = stdlib.Array_set(v1832, '0', v1837);
      const v1840 = stdlib.Array_set(v1468, stdlib.checkedBigNumberify('./interface.rsh:298:57:application', stdlib.UInt_max, '0'), v1839);
      ;
      const v1841 = stdlib.Array_set(v1460, '6', true);
      const v3318 = v1459;
      const v3319 = v1841;
      const v3320 = v1461;
      const v3322 = v1840;
      const v3323 = v1831;
      const v3324 = v1841[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '6')];
      if (v3324) {
        const v3327 = stdlib.Array_set(v1841, '12', v1461);
        return;
        }
      else {
        const v3326 = v1841[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '3')];
        return;
        }
      break;
      }
    case 'touch0_698': {
      const v1867 = v1644[1];
      return;
      break;
      }
    }
  
  
  };
export async function _touch8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _touch8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _touch8 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc4 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc5, ctc2, ctc2, ctc3, ctc4, ctc2, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2, ctc5]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    acceptOffer0_698: ctc9,
    cancel0_698: ctc9,
    touch0_698: ctc9
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v1258, v1261, v1347, v1349, v1350, v1351, v1353, v1354, v1355, v1356, v1360, v1432, v1434, v1448, v1459, v1460, v1461, v1468, v1469, v1582] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc0, ctc1, ctc0, ctc2, ctc2, ctc2, ctc3, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc6, ctc0, ctc8, ctc2, ctc2]);
  const v1612 = stdlib.protect(ctc9, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:236:23:application call to [unknown function] (defined at: ./interface.rsh:236:23:function exp)', 'at ./interface.rsh:222:45:application call to "runtouch0_698" (defined at: ./interface.rsh:236:10:function exp)', 'at ./interface.rsh:222:45:application call to [unknown function] (defined at: ./interface.rsh:222:45:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: 'in',
    who: 'touch'
    });
  const v1614 = stdlib.ge(v1582, v1351);
  stdlib.assert(v1614, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:236:23:application call to [unknown function] (defined at: ./interface.rsh:236:23:function exp)', 'at ./interface.rsh:222:45:application call to "runtouch0_698" (defined at: ./interface.rsh:236:10:function exp)', 'at ./interface.rsh:222:45:application call to [unknown function] (defined at: ./interface.rsh:222:45:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: null,
    who: 'touch'
    });
  const v1619 = ['touch0_698', v1612];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1258, v1261, v1347, v1349, v1350, v1351, v1353, v1354, v1355, v1356, v1360, v1432, v1434, v1448, v1459, v1460, v1461, v1468, v1469, v1582, v1619],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:236:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1644], secs: v1646, time: v1645, didSend: v875, from: v1643 } = txn1;
      
      switch (v1644[0]) {
        case 'acceptOffer0_698': {
          const v1647 = v1644[1];
          
          break;
          }
        case 'cancel0_698': {
          const v1757 = v1644[1];
          
          break;
          }
        case 'touch0_698': {
          const v1867 = v1644[1];
          sim_r.txns.push({
            kind: 'api',
            who: "touch"
            });
          ;
          const v1957 = null;
          const v1958 = await txn1.getOutput('touch', 'v1957', ctc11, v1957);
          
          const v1964 = stdlib.safeSub(v1646, v1360);
          const v1965 = stdlib.safeMul(v1964, v1448);
          const v1966 = stdlib.safeDiv(v1965, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
          const v1968 = stdlib.lt(v1966, v1434);
          const v1969 = v1968 ? v1966 : v1434;
          let v1970;
          const v1971 = stdlib.le(v1350, v1969);
          if (v1971) {
            v1970 = v1351;
            }
          else {
            const v1972 = stdlib.safeSub(v1350, v1969);
            v1970 = v1972;
            }
          const v1973 = stdlib.gt(v1351, v1970);
          const v1974 = v1973 ? v1351 : v1970;
          const v1975 = stdlib.Array_set(v1460, '3', v1974);
          const v3518 = v1459;
          const v3519 = v1975;
          const v3520 = v1461;
          const v3522 = v1468;
          const v3523 = v1469;
          const v3524 = v1975[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '6')];
          if (v3524) {
            const v3527 = stdlib.Array_set(v1975, '12', v1461);
            sim_r.isHalt = false;
            }
          else {
            const v3526 = v1975[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '3')];
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0, ctc2, ctc2, ctc2, ctc3, ctc4, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc6, ctc0, ctc8, ctc2, ctc2, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1644], secs: v1646, time: v1645, didSend: v875, from: v1643 } = txn1;
  switch (v1644[0]) {
    case 'acceptOffer0_698': {
      const v1647 = v1644[1];
      return;
      break;
      }
    case 'cancel0_698': {
      const v1757 = v1644[1];
      return;
      break;
      }
    case 'touch0_698': {
      const v1867 = v1644[1];
      undefined /* setApiDetails */;
      ;
      const v1955 = stdlib.ge(v1582, v1351);
      stdlib.assert(v1955, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:237:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:239:13:application call to [unknown function] (defined at: ./interface.rsh:239:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
        msg: null,
        who: 'touch'
        });
      const v1957 = null;
      const v1958 = await txn1.getOutput('touch', 'v1957', ctc11, v1957);
      if (v875) {
        stdlib.protect(ctc11, await interact.out(v1867, v1958), {
          at: './interface.rsh:236:11:application',
          fs: ['at ./interface.rsh:236:11:application call to [unknown function] (defined at: ./interface.rsh:236:11:function exp)', 'at ./interface.rsh:240:12:application call to "k" (defined at: ./interface.rsh:239:13:function exp)', 'at ./interface.rsh:239:13:application call to [unknown function] (defined at: ./interface.rsh:239:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
          msg: 'out',
          who: 'touch'
          });
        }
      else {
        }
      
      const v1964 = stdlib.safeSub(v1646, v1360);
      const v1965 = stdlib.safeMul(v1964, v1448);
      const v1966 = stdlib.safeDiv(v1965, stdlib.checkedBigNumberify('./interface.rsh:30:19:decimal', stdlib.UInt_max, '1000000'));
      const v1968 = stdlib.lt(v1966, v1434);
      const v1969 = v1968 ? v1966 : v1434;
      let v1970;
      const v1971 = stdlib.le(v1350, v1969);
      if (v1971) {
        v1970 = v1351;
        }
      else {
        const v1972 = stdlib.safeSub(v1350, v1969);
        v1970 = v1972;
        }
      const v1973 = stdlib.gt(v1351, v1970);
      const v1974 = v1973 ? v1351 : v1970;
      const v1975 = stdlib.Array_set(v1460, '3', v1974);
      const v3518 = v1459;
      const v3519 = v1975;
      const v3520 = v1461;
      const v3522 = v1468;
      const v3523 = v1469;
      const v3524 = v1975[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '6')];
      if (v3524) {
        const v3527 = stdlib.Array_set(v1975, '12', v1461);
        return;
        }
      else {
        const v3526 = v1975[stdlib.checkedBigNumberify('./interface.rsh:224:18:application', stdlib.UInt_max, '3')];
        return;
        }
      break;
      }
    }
  
  
  };
export async function acceptOffer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for acceptOffer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for acceptOffer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 8) {return _acceptOffer8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function cancel(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for cancel expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for cancel expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 8) {return _cancel8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function touch(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for touch expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for touch expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 8) {return _touch8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`acceptOffer()byte[0]`, `cancel()byte[0]`, `touch()byte[0]`],
    pure: [`state()(address,uint64,uint64,uint64,uint64,uint64,byte,uint64,uint64,address[9],uint64[9],uint64,address)`],
    sigs: [`acceptOffer()byte[0]`, `cancel()byte[0]`, `state()(address,uint64,uint64,uint64,uint64,uint64,byte,uint64,uint64,address[9],uint64[9],uint64,address)`, `touch()byte[0]`]
    },
  appApproval: `BiAoAAEIfwQGIEjpAwUooALAhD04MKgCAv0C/AP7BPoFEBFACY+6g+AIqPqj/g6ABJkDy977gwYHgAOxA5kGkQZnGEEK+QYmCgEAAQEBAgEGAQMBBAEFAAEHAQgiNQAxGEEL/CcHZEkiWzUBSSRbNQIhFVs1CDYaABdJQQEOIjUEIzUGSSEZDEAA2EkhGgxAAA8hGhJEJwc1/yg0/1BCAREhGRJENAFJIQUMQABdSSQMQAAvJBJEKGQpZFAqZFAnBGRQJwVkUCcGZFArZFAnCGRQJwlkUEk1AyEbIQhYNQdCC3UhBRJEKGQpZFAqZFAnBGRQJwVkUCcGZFArZFBJNQMhDyEIWDUHQgtNSSEJDEAAJUgoZClkUCpkUCcEZFAnBWRQJwZkUCtkUEk1AyEPIQhYNQdCCyEhBBJEKGQpZFAqZFAnBGRQJwVkUCcGZFArZFAnCGRQSTUDIRwhCFg1B0IK9UkhHQxAAA8hHRJEJwc1/yo0/1BCADmByrHqzAQSRCcHNf8pNP9QQgAmNhoCFzUENhoDNhoBF0khBAxABfVJIQUMQAOdSSEeDEADCiEeEkQkNAESRDQESSISTDQCEhFEKGQpZFAqZFAnBGRQJwVkUCcGZFArZFAnCGRQJwlkUEk1A0lKSkpKSkpKSkpXACA1/yEGWzX+VyggNf0hB1s1/IFQWzX7gVhbNfqBYCELWDX5IR8hB1g1+IHIA1s194HQA1s19oHYA1s19YHgA1s19IHoA1s184HwA1s18oH4A1s18SEbIQhYNfCB6QchBlg174GJCCEWWDXugZoIWzXtgaIIWzXsSTUFNeuABAOjbrg061CwNOsiVUkjDEABGEkhEAxAAIwhEBJENOw0+g9EgAgAAAAAAAAHpbAnBzUHMgc09Qk08gshDAo16jTzNOpJNPMMTTXpNPs06Q5BAAc0+jXoQgAHNPs06Qk16DT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNPI08TTwNOg0+kk06A1NFjXnSVcAMDTnUEwhDSEgWFA07zIGNO407UIHl0gxADT9EkSACAAAAAAAAAcesCcHNQexIrIBNPayCCOyEDEAsgezNO5XABE16rEisgE0/LISIQSyEDEAshQ0/rIRszT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNPI08TTwIyEHTFY07zIGNOpJIls0/AkWNelXCAk06UxQNO009glCBxJINOyICOOACAAAAAAAAAZ6sCcHNQcyBzT1CTTyCyEMCjXqNPM06kk08wxNNek0+zTpDkEABzT6NehCAAc0+zTpCTXoNOg0+kk06A1NSTXngWQKNeY05zTmCUk15TT3CjXkNOU05DT0Cwk147EisgE05rIII7IQNP+yB7OxIrIBNOOyCCOyEDT9sgezNPY07DTnCQg14rEisgE04rIII7IQMQCyB7M07lcAETXhsSKyATT8shIhBLIQMQCyFDT+shGzNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPM08jTkNPAjIQdMVjTnFjXgSVcAMDTgUEwhDSEgWFAxADIGNOFJIls0/AkWNeBXCAk04ExQNO007Ag05gk04wk04glCBfJIIQU0ARJENARJIhJMNAISEUQoZClkUCpkUCcEZFAnBWRQJwZkUCtkUDUDSTUFNf+ABERQNi00/1CwsSKyATQDISEhB1ghF1uyCCOyEDQDJCELWIGAAiEGWLIHs7EisgE0AyEiW7III7IQNP+yB7OxIrIBIrISIQSyEDIJshUyCrIUNAMiW7IRs0IGtkkhCQxAAQBIIQk0ARJENARJIhJMNAISEUQoZClkUCpkUCcEZFAnBWRQJwZkUCtkUEk1A0lKSSJbNf8kIQtYNf4hDyEIWDX9ISJbNfwhISEHWDX7gATMmZJcsLEisgE0+yEGW7III7IQNP5XgCCyB7OxIrIBNPshCluyCCOyEDT+V6AgsgezsSKyATT7IQ5bsggjshA0/lfAILIHs7EisgE0+yENW7III7IQNP5X4CCyB7M0/xY0/lA0/VA0/BZQNPtQKEsBVwB/ZylLAVd/f2cqSwFX/n9nJwRLASERJVhnJwVLASESJVhnJwZLASETJVhnK0sBIRQhI1hnSCEFNQEyBjUCQgXcSCEENAESRDQESSISTDQCEhFEKGQpZFAqZFAnBGRQJwVkUCcGZFArZFAnCGRQSTUDSUoiWzX/JCELWDX+gfgCWzX9IRwhCFg1/IAEkSc087A0AyEfIRZYVwARIlsiEkQ0A4GRA1s0/TQDgfACWwsJNfsnBzX6IjX5NPo0AyEPIQdYJDT5CyRYF0k1+DT9CxZQNfo0+SMISTX5IRgMQP/ZsSKyATT6IluyCCOyEDT+VwAgsgezsSKyATT6JFuyCCOyEDT+VyAgsgezsSKyATT6IRVbsggjshA0/ldAILIHs7EisgE0+iEkW7III7IQNP5XYCCyB7M0/xY0/lA0/FA0+xZQNPpQKEsBVwB/ZylLAVd/f2cqSwFX/n9nJwRLASERJVhnJwVLASESJVhnJwZLASETJVhnK0sBIRQhI1hnSCEJNQEyBjUCQgSSSSMMQAJQSSEQDEAARiEQEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDISVbD0SxIrIBIrISIQSyEDIJshUyCrIUNAMhCluyEbNCBBJIsSKyASEFshA0CLIYsyM0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hBls1/iEKWzX9VzARNfxJNQVJSkpKSklXACA1+yEGWzX6IQpbNfkhDls1+CENWzX3IRchC1g19oHgAiEHWDX1gagDWzX0gbADWzXzgbgDWzXygcADWzXxgATudzxiNPtQNPoWUDT5FlA0+BZQNPcWUDT2UDT1UDT0FlA08xZQNPIWUDTxFlCwMgY0AyElWwxENPoiDUQ0+CINRDT4NPkORDT3Ig1EIjXwIjXvNPUkNO8LJFgXNe408DTuCDXwNO8jCEk17yEYDED/4TTwNPQORDT0ISY0+AshDAoSRDTzgfAuD0Q08oGIJw9ENPGB6IQBD0Q0/jTyNPMINPEICDXvNO+IA2o0/FcAETXuNPo0/YgDdDT+NPIINe2xIrIBNO2yCCOyEDT/sgezNPk0+AlJNewhDAs09zIHCQo16zT/NP0xADT6NPk0+DT2NPU09DTzMgc09SJbNPUkWwg09SEVWwg09SEkWwg09SEGWwg09SEKWwg09SEOWwg09SENWwg09SEXWwg07DTrIjT7NP0WUDT6FlA0+RZQNPkWUDT4FlAoUDT3FlA06yEMChZQNPZQNPVQNPQWUDT7UDEAMgY07kkiWzT6CBY16lcICTTqTFA07zTtCUIAv0iBwJoMiAKOsSKyASEFshAishiABgYxADIJErIeK7Ifs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSUpXACA1/yEGWzX+IQpbNf0hDls1/IAE6MFQyDT/UDT+FlA0/RZQNPwWULAhFq9JNftXABEkrzX5VwgJNPlMUDX6gaCNBogCFbEisgEishIhBLIQMgqyFDT8shGzMgY0/Qg1+TT/NP4WUDT8FlA0+lA0+RZQKEsBVwBJZ0gjNQEyBjUCQgF9Nf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jXxNfA17zXuNe017DT7V0gBF0EAeTT7NPw16iKByQNYNOpQNes07RY08lA081A09xZQNPoWUDT+UDT/FlA061AoSwFXAH9nKUsBV39/ZypLAVf+f2cnBEsBIRElWGcnBUsBIRIlWGcnBksBIRMlWGcrSwEhFCVYZycISwEhJyEYWGdIIQQ1ATIGNQJCANM0+yEOWzXrNOw07RZQNO5QNO8WUDTwFlA08RZQNPJQNPNQNPQWUDT1FlA09hZQNPcWUDT4FlA0+RZQNPoWUDT7UDT8UDT+UDT/FlA06xZQKEsBVwB/ZylLAVd/f2cqSwFX/n9nJwRLASERJVhnJwVLASESJVhnJwZLASETJVhnK0sBIRQlWGcnCEsBISclWGcnCUsBgfgHgTJYZ0gkNQEyBjUCQgAtMRkhCRJEsSKyASEFshA0CLIYIQmyGbOxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQnBzQBFjQCFjQIFlBQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhJjE1EkQiMTYSRCIxNxJEIjUBIjUCIjUIQv+mNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhBBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: {
    publish1: 1
    },
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 9,
  stateSize: 1066,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v1258",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1259",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1260",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1261",
                "type": "address"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v1258",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1259",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1260",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v1261",
                "type": "address"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v1348",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1349",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1350",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1351",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1352",
                "type": "uint256"
              },
              {
                "internalType": "address payable[9]",
                "name": "v1353",
                "type": "address[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v1354",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v1355",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1356",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1357",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1358",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v2112",
                "type": "address"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T21",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_acceptOffer0_698",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cancel0_698",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_touch0_698",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T21",
                "name": "v1644",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1658",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1822",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1957",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v1348",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1349",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1350",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1351",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1352",
                "type": "uint256"
              },
              {
                "internalType": "address payable[9]",
                "name": "v1353",
                "type": "address[9]"
              },
              {
                "internalType": "uint256[9]",
                "name": "v1354",
                "type": "uint256[9]"
              },
              {
                "internalType": "uint256",
                "name": "v1355",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1356",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1357",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1358",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v2112",
                "type": "address"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T21",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_acceptOffer0_698",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_cancel0_698",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_touch0_698",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T21",
                "name": "v1644",
                "type": "tuple"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "acceptOffer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "cancel",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "state",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "elem1",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem3",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem4",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem5",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "elem6",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "elem7",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "elem8",
            "type": "uint256"
          },
          {
            "internalType": "address payable[9]",
            "name": "elem9",
            "type": "address[9]"
          },
          {
            "internalType": "uint256[9]",
            "name": "elem10",
            "type": "uint256[9]"
          },
          {
            "internalType": "uint256",
            "name": "elem11",
            "type": "uint256"
          },
          {
            "internalType": "address payable",
            "name": "elem12",
            "type": "address"
          }
        ],
        "internalType": "struct T3",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "touch",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162005250380380620052508339810160408190526200002691620004a5565b600080554360035562000038620002d3565b6040805133815283516020808301919091528085015180516001600160a01b03908116848601529181015160608085019190915281850151608085015201511660a082015290517ff3f7b40e3e3b9f4100b9e92d74f44191fabe2129aaf0490c6d70d95395a3def79181900360c00190a1805160009081905281516020908101829052825160409081018390528351828501805191909152805182516060810184528581528251518501519481019490945290515182015115159183019190915262000106929091620001ce565b6040820152620001193415600862000251565b62000133438360200151604001516200027c60201b60201c565b60608201526200014262000322565b60208084018051516001600160a01b0390811684528151830151848401529051606090810151909116604080850191909152848101518285015290840151608084015260016000819055439055516200019e918391016200056c565b60405160208183030381529060405260029080519060200190620001c49291906200035e565b505050506200067b565b620001d8620003ed565b60005b60018110156200022e57848160018110620001fa57620001fa62000556565b602002015182826001811062000214576200021462000556565b602002015280620002258162000605565b915050620001db565b508181846001811062000245576200024562000556565b60200201529392505050565b81620002785760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000826200028b838262000623565b9150811015620002cd5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016200026f565b92915050565b6040805160e0810190915260006080820181815260a0830182905260c083019190915281526020810162000306620003ed565b815260200162000315620003ed565b8152602001600081525090565b6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200162000315620003ed565b8280546200036c906200063e565b90600052602060002090601f016020900481019282620003905760008555620003db565b82601f10620003ab57805160ff1916838001178555620003db565b82800160010185558215620003db579182015b82811115620003db578251825591602001919060010190620003be565b50620003e99291506200043a565b5090565b60405180602001604052806001905b62000423604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003fc5790505090565b5b80821115620003e957600081556001016200043b565b604051608081016001600160401b03811182821017156200048257634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620004a057600080fd5b919050565b600081830360a0811215620004b957600080fd5b604080519081016001600160401b0381118282101715620004ea57634e487b7160e01b600052604160045260246000fd5b604052835181526080601f19830112156200050457600080fd5b6200050e62000451565b91506200051e6020850162000488565b82526040840151602083015260608401516040830152620005426080850162000488565b606083015260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b039081168252602080840151818401526040808501519092168284015260608085015160e08501939192919083860160005b6001811015620005d95782518051835285810151868401528401511515848301529184019190850190600101620005a7565b505050505050608083015160c083015292915050565b634e487b7160e01b600052601160045260246000fd5b60006000198214156200061c576200061c620005ef565b5060010190565b60008219821115620006395762000639620005ef565b500190565b600181811c908216806200065357607f821691505b602082108114156200067557634e487b7160e01b600052602260045260246000fd5b50919050565b614bc5806200068b6000396000f3fe6080604052600436106100bd5760003560e01c8063a55526db11610079578063c19d93fb11610056578063c19d93fb14610199578063cc42de3f146101bb578063ea8a1af0146101ce578063eb62df61146101d657005b8063a55526db1461014b578063a7661d5414610163578063ab53f2c61461017657005b80631e93b0f1146100c65780633f586b65146100ea57806340095e8b146100fd5780637eea518c1461011057806383230757146101235780638e3147691461013857005b366100c457005b005b3480156100d257600080fd5b506003545b6040519081526020015b60405180910390f35b6100c46100f8366004613bdc565b6101de565b6100c461010b366004613bf8565b610217565b6100c461011e366004613bdc565b61024c565b34801561012f57600080fd5b506001546100d7565b6100c4610146366004613bdc565b610281565b6101536102b6565b60405190151581526020016100e1565b6100c4610171366004613bdc565b6102fb565b34801561018257600080fd5b5061018b610330565b6040516100e1929190613c36565b3480156101a557600080fd5b506101ae6103cd565b6040516100e19190613d86565b6100c46101c9366004613d95565b6103e6565b61015361041b565b610153610460565b604080516060810182526000808252602082018190529181019190915261021361020d36849003840184613f47565b8261049e565b5050565b604080516060810182526000808252602082018190529181019190915261021361024636849003840184613faf565b82610674565b604080516060810182526000808252602082018190529181019190915261021361027b36849003840184614050565b82611f07565b60408051606081018252600080825260208201819052918101919091526102136102b036849003840184614050565b82612044565b60006102c06136d6565b6020818101515160029052604080516060810182526000808252928101839052908101919091526102f18282610674565b6040015192915050565b604080516060810182526000808252602082018190529181019190915261021361032a36849003840184614050565b82612315565b6000606060005460028080546103459061409e565b80601f01602080910402602001604051908101604052809291908181526020018280546103719061409e565b80156103be5780601f10610393576101008083540402835291602001916103be565b820191906000526020600020905b8154815290600101906020018083116103a157829003601f168201915b50505050509050915091509091565b6103d561371b565b60006103e081612682565b91505090565b604080516060810182526000808252602082018190529181019190915261021361041536849003840184614173565b82612993565b60006104256136d6565b6020818101515160019052604080516060810182526000808252928101839052908101919091526104568282610674565b6020015192915050565b600061046a6136d6565b60208181015151600090819052604080516060810182528281529283018290528201526104978282610674565b5192915050565b6104ae600660005414602361301e565b81516104c99015806104c257508251600154145b602461301e565b6000808055600280546104db9061409e565b80601f01602080910402602001604051908101604052809291908181526020018280546105079061409e565b80156105545780601f1061052957610100808354040283529160200191610554565b820191906000526020600020905b81548152906001019060200180831161053757829003601f168201915b505050505080602001905181019061056c91906143c3565b604080513381528551602080830191909152860151516001600160a01b03168183015290519192507f1dd5064aef160903bcb744fc78fa944d64f3adc4af77f4e3e6bc718d6e7511eb919081900360600190a16105cb3415602261301e565b6020810151610100908101516080830151909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610616573d6000803e3d6000fd5b5060208301515160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610658573d6000803e3d6000fd5b506000808055600181905561066f906002906137a3565b505050565b610684600860005414602a61301e565b815161069f90158061069857508251600154145b602b61301e565b6000808055600280546106b19061409e565b80601f01602080910402602001604051908101604052809291908181526020018280546106dd9061409e565b801561072a5780601f106106ff5761010080835404028352916020019161072a565b820191906000526020600020905b81548152906001019060200180831161070d57829003601f168201915b505050505080602001905181019061074291906144d4565b90506107a86040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b7f9de83b10b41d07e2f1cd115a57180c12d9e87d8879a27a26ab4a317ea766899d33856040516107d992919061460c565b60405180910390a160006020850151515160028111156107fb576107fb614088565b141561183e576108138261026001513414602561301e565b604051600081527fabeefa311cc221b4ba107a8b314eb1a98f47df73ab0c96d22b9f3b6989d13d359060200160405180910390a1600083526101408201516108789061086f90610864904290613044565b846101a00151613099565b620f42406130f8565b8082526101808301511161089157816101800151610894565b80515b602082018190526080830151116108b45760a082015160408201526108cc565b6108c682608001518260200151613044565b60408201525b80604001518260a00151116108e55780604001516108eb565b8160a001515b606082018190526108fd9060646130f8565b60808201819052606082015161091291613044565b60a0820181905261010083015161092991906130f8565b60c0820181905260a082015161016084015161094d9261094891613099565b613044565b60e0820152815160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561098f573d6000803e3d6000fd5b5081604001516001600160a01b03166108fc8260e001519081150290604051600060405180830381858888f193505050501580156109d1573d6000803e3d6000fd5b506109f38261012001516109ee8461026001518460600151613044565b613146565b6101008201819052604051339180156108fc02916000818181858888f19350505050158015610a26573d6000803e3d6000fd5b50610a3a8260200151338460600151613193565b610a426137e0565b82600001518160000151600001906001600160a01b031690816001600160a01b03168152505082602001518160000151602001906001600160a01b031690816001600160a01b03168152505082604001518160000151604001906001600160a01b031690816001600160a01b0316815250508260600151816000015160600181815250508260800151816000015160800181815250508260a00151816000015160a00181815250508260c00151816000015160c001819052508260e00151816000015160e0018190525082610100015181600001516101000181815250508261012001518160000151610120018181525050826101400151816000015161014001818152505082610160015181600001516101600181815250508261018001518160000151610180018181525050826101a0015181600001516101a00181815250508160c0015181602001516000018181525050604051806101a00160405280604051806101a00160405280866101e00151600001516001600160a01b03168152602001866101e00151602001516001600160a01b03168152602001866101e00151604001518152602001866101e00151606001518152602001866101e00151608001518152602001866101e0015160a001518152602001600115158152602001866101e0015160e001518152602001866101e0015161010001518152602001866101e0015161012001518152602001866101e0015161014001518152602001866101e0015161016001518152602001866101e0015161018001516001600160a01b0316815250600001516001600160a01b03168152602001604051806101a00160405280866101e00151600001516001600160a01b03168152602001866101e00151602001516001600160a01b03168152602001866101e00151604001518152602001866101e00151606001518152602001866101e00151608001518152602001866101e0015160a001518152602001600115158152602001866101e0015160e001518152602001866101e0015161010001518152602001866101e0015161012001518152602001866101e0015161014001518152602001866101e0015161016001518152602001866101e0015161018001516001600160a01b0316815250602001516001600160a01b03168152602001604051806101a00160405280866101e00151600001516001600160a01b03168152602001866101e00151602001516001600160a01b03168152602001866101e00151604001518152602001866101e00151606001518152602001866101e00151608001518152602001866101e0015160a001518152602001600115158152602001866101e0015160e001518152602001866101e0015161010001518152602001866101e0015161012001518152602001866101e0015161014001518152602001866101e0015161016001518152602001866101e0015161018001516001600160a01b031681525060400151815260200183606001518152602001604051806101a00160405280866101e00151600001516001600160a01b03168152602001866101e00151602001516001600160a01b03168152602001866101e00151604001518152602001866101e00151606001518152602001866101e00151608001518152602001866101e0015160a001518152602001600115158152602001866101e0015160e001518152602001866101e0015161010001518152602001866101e0015161012001518152602001866101e0015161014001518152602001866101e0015161016001518152602001866101e0015161018001516001600160a01b0316815250608001518152602001604051806101a00160405280866101e00151600001516001600160a01b03168152602001866101e00151602001516001600160a01b03168152602001866101e00151604001518152602001866101e00151606001518152602001866101e00151608001518152602001866101e0015160a001518152602001600115158152602001866101e0015160e001518152602001866101e0015161010001518152602001866101e0015161012001518152602001866101e0015161014001518152602001866101e0015161016001518152602001866101e0015161018001516001600160a01b031681525060a001518152602001604051806101a00160405280866101e00151600001516001600160a01b03168152602001866101e00151602001516001600160a01b03168152602001866101e00151604001518152602001866101e00151606001518152602001866101e00151608001518152602001866101e0015160a001518152602001600115158152602001866101e0015160e001518152602001866101e0015161010001518152602001866101e0015161012001518152602001866101e0015161014001518152602001866101e0015161016001518152602001866101e0015161018001516001600160a01b031681525060c0015115158152602001604051806101a00160405280866101e00151600001516001600160a01b03168152602001866101e00151602001516001600160a01b03168152602001866101e00151604001518152602001866101e00151606001518152602001866101e00151608001518152602001866101e0015160a001518152602001600115158152602001866101e0015160e001518152602001866101e0015161010001518152602001866101e0015161012001518152602001866101e0015161014001518152602001866101e0015161016001518152602001866101e0015161018001516001600160a01b031681525060e001518152602001604051806101a00160405280866101e00151600001516001600160a01b03168152602001866101e00151602001516001600160a01b03168152602001866101e00151604001518152602001866101e00151606001518152602001866101e00151608001518152602001866101e0015160a001518152602001600115158152602001866101e0015160e001518152602001866101e0015161010001518152602001866101e0015161012001518152602001866101e0015161014001518152602001866101e0015161016001518152602001866101e0015161018001516001600160a01b031681525061010001518152602001604051806101a00160405280866101e00151600001516001600160a01b03168152602001866101e00151602001516001600160a01b03168152602001866101e00151604001518152602001866101e00151606001518152602001866101e00151608001518152602001866101e0015160a001518152602001600115158152602001866101e0015160e001518152602001866101e0015161010001518152602001866101e0015161012001518152602001866101e0015161014001518152602001866101e0015161016001518152602001866101e0015161018001516001600160a01b031681525061012001518152602001604051806101a00160405280866101e00151600001516001600160a01b03168152602001866101e00151602001516001600160a01b03168152602001866101e00151604001518152602001866101e00151606001518152602001866101e00151608001518152602001866101e0015160a001518152602001600115158152602001866101e0015160e001518152602001866101e0015161010001518152602001866101e0015161012001518152602001866101e0015161014001518152602001866101e0015161016001518152602001866101e0015161018001516001600160a01b031681525061014001518152602001604051806101a00160405280866101e00151600001516001600160a01b03168152602001866101e00151602001516001600160a01b03168152602001866101e00151604001518152602001866101e00151606001518152602001866101e00151608001518152602001866101e0015160a001518152602001600115158152602001866101e0015160e001518152602001866101e0015161010001518152602001866101e0015161012001518152602001866101e0015161014001518152602001866101e0015161016001518152602001866101e0015161018001516001600160a01b031681525061016001518152602001604051806101a00160405280866101e00151600001516001600160a01b03168152602001866101e00151602001516001600160a01b03168152602001866101e00151604001518152602001866101e00151606001518152602001866101e00151608001518152602001866101e0015160a001518152602001600115158152602001866101e0015160e001518152602001866101e0015161010001518152602001866101e0015161012001518152602001866101e0015161014001518152602001866101e0015161016001518152602001866101e0015161018001516001600160a01b031681525061018001516001600160a01b0316815250816020015160200181905250338160200151604001906001600160a01b031690816001600160a01b03168152505043816020015160600181815250506117de8361022001516000604051806060016040528061178988610220015160006001811061177957611779614435565b60200201515160608a0151613044565b81526020018761022001516000600181106117a6576117a6614435565b60200201516020015181526020018761022001516000600181106117cc576117cc614435565b602002015160400151151590526131a7565b81602001516080018190525061182661181b611811611807866102400151876102600151613146565b8560800151613044565b8460e00151613044565b836101000151613044565b602082015160a001526118388161321b565b50611f01565b600160208501515151600281111561185857611858614088565b1415611be45761186a3415602661301e565b61188d82604001516001600160a01b0316336001600160a01b031614602761301e565b604051600081527fe66ed59d36e92d19b1fe0c3d9aa370c4e0b87e2f23196eedd7b8360c31c092d99060200160405180910390a1600060208401819052610120830151604051339282156108fc02929190818181858888f193505050501580156118fb573d6000803e3d6000fd5b5061190f8260200151338460600151613193565b6119176137e0565b82600001518160000151600001906001600160a01b031690816001600160a01b03168152505082602001518160000151602001906001600160a01b031690816001600160a01b03168152505082604001518160000151604001906001600160a01b031690816001600160a01b0316815250508260600151816000015160600181815250508260800151816000015160800181815250508260a00151816000015160a00181815250508260c00151816000015160c001819052508260e00151816000015160e0018190525082610100015181600001516101000181815250508261012001518160000151610120018181525050826101400151816000015161014001818152505082610160015181600001516101600181815250508261018001518160000151610180018181525050826101a0015181600001516101a0018181525050826101c0015181602001516000018181525050604051806101a00160405280846101e00151600001516001600160a01b03168152602001846101e00151602001516001600160a01b03168152602001846101e00151604001518152602001846101e00151606001518152602001846101e00151608001518152602001846101e0015160a001518152602001600115158152602001846101e0015160e001518152602001846101e0015161010001518152602001846101e0015161012001518152602001846101e0015161014001518152602001846101e0015161016001518152602001846101e0015161018001516001600160a01b03168152508160200151602001819052508261020001518160200151604001906001600160a01b031690816001600160a01b0316815250504381602001516060018181525050611bc58361022001516000604051806060016040528061178988610220015160006001811061177957611779614435565b6020820151608001526102408301516101208401516118269190613044565b6002602085015151516002811115611bfe57611bfe614088565b1415611f0157611c103415602861301e565b611c278260a001518361026001511015602961301e565b604051600081527f2d8796f84e7a324d86963f22a2cd360e5e603b129abd3121db7b274bea49631e9060200160405180910390a160006040840152610140820151611c7b9061086f90610864904290613044565b610120820181905261018083015111611c9957816101800151611ca0565b8061012001515b6101408201819052608083015111611cc25760a0820151610160820152611cdc565b611cd58260800151826101400151613044565b6101608201525b611ce46137e0565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151855182015260808088015186519091015260a0808801805187519092019190915260c08089015187519091015260e080890151875190910152610100808901518751909101526101208089015187519091015261014080890151875190910152610160808901518751820152610180808a01518851909101526101a0808a015188518201526101c08a01518689015152845190810185526101e08a0180515188168252805187015190971695810195909552945183015192840192909252928501519051919283019111611df257836101600151611df8565b8460a001515b8152602001846101e00151608001518152602001846101e0015160a001518152602001846101e0015160c0015115158152602001846101e0015160e001518152602001846101e0015161010001518152602001846101e0015161012001518152602001846101e0015161014001518152602001846101e0015161016001518152602001846101e0015161018001516001600160a01b03168152508160200151602001819052508261020001518160200151604001906001600160a01b031690816001600160a01b0316815250504381602001516060018181525050826102200151816020015160800181905250826102400151816020015160a00181815250506118388161321b565b50505050565b611f17600160005414601861301e565b8151611f32901580611f2b57508251600154145b601961301e565b600080805560028054611f449061409e565b80601f0160208091040260200160405190810160405280929190818152602001828054611f709061409e565b8015611fbd5780601f10611f9257610100808354040283529160200191611fbd565b820191906000526020600020905b815481529060010190602001808311611fa057829003601f168201915b5050505050806020019051810190611fd59190614680565b9050611fe98160800151431015601a61301e565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338460405161201a9291906146e8565b60405180910390a161202e3415601761301e565b6000808055600181905561066f906002906137a3565b612054600560005414602061301e565b815161206f90158061206857508251600154145b602161301e565b6000808055600280546120819061409e565b80601f01602080910402602001604051908101604052809291908181526020018280546120ad9061409e565b80156120fa5780601f106120cf576101008083540402835291602001916120fa565b820191906000526020600020905b8154815290600101906020018083116120dd57829003601f168201915b505050505080602001905181019061211291906143c3565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33846040516121459291906146e8565b60405180910390a16121593415601f61301e565b6020810151600460200201516001600160a01b03166108fc826080015160046009811061218857612188614435565b60200201516040518115909202916000818181858888f193505050501580156121b5573d6000803e3d6000fd5b50602081015160a0908101516080830151909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612200573d6000803e3d6000fd5b50602081015160c0908101516080830151909101516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561224b573d6000803e3d6000fd5b50602081015160e0908101516080830151909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612296573d6000803e3d6000fd5b5061229f613800565b81516001600160a01b0316815260208083015181830152604080840151818401526060808501519084015260808085015190840152600660005543600155516122ea91839101614710565b6040516020818303038152906040526002908051906020019061230e929190613844565b5050505050565b612325600460005414601d61301e565b815161234090158061233957508251600154145b601e61301e565b6000808055600280546123529061409e565b80601f016020809104026020016040519081016040528092919081815260200182805461237e9061409e565b80156123cb5780601f106123a0576101008083540402835291602001916123cb565b820191906000526020600020905b8154815290600101906020018083116123ae57829003601f168201915b50505050508060200190518101906123e3919061476f565b90506123ed6138c8565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb190722338560405161241e9291906146e8565b60405180910390a16124323415601b61301e565b60a082015151516124459015601c61301e565b61245f8260c0015161094884608001518560600151613099565b815260005b60098110156124d0578260400151816009811061248357612483614435565b60200201518260200181815250506124a382602001518460800151613099565b826040015182600981106124b9576124b9614435565b6020020152806124c88161481e565b915050612464565b506020820151516040828101515190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612513573d6000803e3d6000fd5b506020828101518101516040838101519092015191516001600160a01b039091169180156108fc02916000818181858888f1935050505015801561255b573d6000803e3d6000fd5b506020820151600260200201516001600160a01b03166108fc826040015160026009811061258b5761258b614435565b60200201516040518115909202916000818181858888f193505050501580156125b8573d6000803e3d6000fd5b5060208201516060908101516040838101519092015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015612602573d6000803e3d6000fd5b5061260b613800565b82516001600160a01b031681526020808401518183015260e0840151604080840191909152835160608401528381015160808401526005600055436001555161265691839101614710565b6040516020818303038152906040526002908051906020019061267a929190613844565b505050505050565b61268a61371b565b60016000541415612745576000600280546126a49061409e565b80601f01602080910402602001604051908101604052809291908181526020018280546126d09061409e565b801561271d5780601f106126f25761010080835404028352916020019161271d565b820191906000526020600020905b81548152906001019060200180831161270057829003601f168201915b50505050508060200190518101906127359190614680565b90506127436000600761301e565b505b600460005414156127fb5760006002805461275f9061409e565b80601f016020809104026020016040519081016040528092919081815260200182805461278b9061409e565b80156127d85780601f106127ad576101008083540402835291602001916127d8565b820191906000526020600020905b8154815290600101906020018083116127bb57829003601f168201915b50505050508060200190518101906127f0919061476f565b60e001519392505050565b600560005414156128b1576000600280546128159061409e565b80601f01602080910402602001604051908101604052809291908181526020018280546128419061409e565b801561288e5780601f106128635761010080835404028352916020019161288e565b820191906000526020600020905b81548152906001019060200180831161287157829003601f168201915b50505050508060200190518101906128a691906143c3565b604001519392505050565b600660005414156128cb576000600280546128159061409e565b60086000541415612982576000600280546128e59061409e565b80601f01602080910402602001604051908101604052809291908181526020018280546129119061409e565b801561295e5780601f106129335761010080835404028352916020019161295e565b820191906000526020600020905b81548152906001019060200180831161294157829003601f168201915b505050505080602001905181019061297691906144d4565b6101e001519392505050565b61298e6000600761301e565b919050565b6129a3600160005414601461301e565b81516129be9015806129b757508251600154145b601561301e565b6000808055600280546129d09061409e565b80601f01602080910402602001604051908101604052809291908181526020018280546129fc9061409e565b8015612a495780601f10612a1e57610100808354040283529160200191612a49565b820191906000526020600020905b815481529060010190602001808311612a2c57829003601f168201915b5050505050806020019051810190612a619190614680565b9050612a6b6138e9565b612a7c82608001514310601661301e565b7fa4a4514da894eedda0e04c3c96a5c499cb611d7dedb9b462c6f9a5be021a1d2f3385604051612aad929190614839565b60405180910390a1612acb600085602001516020015111600961301e565b612ae1600085602001516060015111600a61301e565b612aff8460200151604001518560200151606001511115600b61301e565b612b15600085602001516080015111600c61301e565b6000602082018190525b6009811015612b7957846020015160c001518160098110612b4257612b42614435565b6020020151826040018181525050612b6282602001518360400151613146565b602083015280612b718161481e565b915050612b1f565b506020808201518083529085015160e00151612b98911115600d61301e565b612bc2612bb161086f600a876020015160600151613099565b856020015160e0015114600e61301e565b612bdb611770856020015161010001511015600f61301e565b612bf4611388856020015161012001511015601061301e565b612c0d614268856020015161014001511015601161301e565b612c4382602001516109ee612c348760200151610120015188602001516101000151613146565b87602001516101400151613146565b60608201819052612c57903414601261301e565b612c78612c713384604001518760200151602001516134da565b601361301e565b612c8f826020015185602001516101200151613146565b6080820181905282516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015612ccd573d6000803e3d6000fd5b50612ce8846020015160400151856020015160600151613044565b60a08201819052612d1790612d0090620f4240613099565b612d1286602001516080015142613044565b6130f8565b60c0808301918252602080870180515160e080870180516001600160a01b0393841690526040808a015182519416938601939093528351909401518451830152825182015184516060908101919091528351909201518451608090810191909152835190920151845160a00152835160009501949094529051015190519091015251612da690620f42406130f8565b60e08083018051610100019290925260208601805160a0015183516101200152805160c001518351610140015280519091015182516101600152515190516001600160a01b0390911661018090910152612dfe6137e0565b825181516001600160a01b0391821690526040808501518351921660209283015282513390820152868201805190920151835160609081019190915282519091015183516080015281510151825160a09081019190915281510151825160c0908101919091528151810151835160e09081019190915282510151835161010090810191909152825101518351610120015282514261014090910152905101518051612f3d91612f2d91612f1d91612f0d91612efd91612eed91612edd91612ecd919060015b6020020151613146565b60208d015160c001516002612ec3565b60208c015160c001516003612ec3565b60208b015160c001516004612ec3565b60208a015160c001516005612ec3565b602089015160c001516006612ec3565b602088015160c001516007612ec3565b602087015160c001516008612ec3565b8151610160015260a08201518151610180015260c082015181516101a001526020808201805160009081905260e08501518251840152815133604091820152915143606091820152868101805184519283019094525151518985015190940151612fee948291612fad9190613146565b81526020018760600151600060018110612fc957612fc9614435565b602002015160200151815260200187606001516000600181106117cc576117cc614435565b81602001516080018190525061300c82606001518360800151613044565b602082015160a0015261230e8161321b565b816102135760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60008261305183826148ea565b91508111156130935760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b604482015260640161303b565b92915050565b60008115806130bd575082826130af8183614901565b92506130bb9083614920565b145b6130935760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b604482015260640161303b565b6000816131355760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b604482015260640161303b565b61313f8284614920565b9392505050565b6000826131538382614942565b91508110156130935760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161303b565b61319e8383836134f0565b61066f57600080fd5b6131af61392e565b60005b60018110156131fb578481600181106131cd576131cd614435565b60200201518282600181106131e4576131e4614435565b6020020152806131f38161481e565b9150506131b2565b508181846001811061320f5761320f614435565b60200201529392505050565b613223613979565b81602001516020015160c00151156133bb57604080516101a08101825260208085018051820151516001600160a01b0390811684528151830151830151811683850152815183015185015184860152815183015160609081015190850152815183015160809081015190850152815183015160a09081015190850152815183015160c090810151151590850152815183015160e0908101519085015281518301516101009081015190850152815183015161012090810151908501528151830151610140908101519085015281519092015161016090810151908401525190920151909116610180820152815261331861398c565b82516020908101516001600160a01b03168252835160c09081015183830152845160e0908101516040808601919091528651610160015160608601528387018051516080808801919091528151015160a08088019190915290510151928501929092528451908401526004600055436001555161339791839101614998565b60405160208183030381529060405260029080519060200190611f01929190613844565b6133c36139ec565b8251516001600160a01b03908116825283516020908101518216818401528451604090810151831681850152855160609081015181860152865160809081015181870152875160a09081015181880152885160c09081015190880152885160e09081015190880152885161010090810151908801528851610120908101519088015288516101409081015190880152885161016090810151908801528851610180908101519088015288516101a090810151908801528489018051516101c089015280518601516101e0890152805185015190961661020088015285519091015161022087015284510151610240860152925182015190920151610260840152600860005543600155905161339791839101614a1a565b60006134e8838530856135c1565b949350505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161354f91614b56565b60006040518083038185875af1925050503d806000811461358c576040519150601f19603f3d011682016040523d82523d6000602084013e613591565b606091505b50915091506135a28282600261369b565b50808060200190518101906135b79190614b72565b9695505050505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161362891614b56565b60006040518083038185875af1925050503d8060008114613665576040519150601f19603f3d011682016040523d82523d6000602084013e61366a565b606091505b509150915061367b8282600161369b565b50808060200190518101906136909190614b72565b979650505050505050565b606083156136aa57508161313f565b8251156136ba5782518084602001fd5b60405163100960cb60e01b81526004810183905260240161303b565b6040518060400160405280600081526020016137166040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b905290565b604051806101a0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000151581526020016000815260200160008152602001613782613ab8565b815260200161378f613ab8565b815260006020820181905260409091015290565b5080546137af9061409e565b6000825580601f106137bf575050565b601f0160209004906000526020600020908101906137dd9190613ad7565b50565b60405180604001604052806137f3613aec565b8152602001613716613b82565b6040518060a0016040528060006001600160a01b03168152602001613823613ab8565b815260200161383061371b565b815260200160008152602001613716613ab8565b8280546138509061409e565b90600052602060002090601f01602090048101928261387257600085556138b8565b82601f1061388b57805160ff19168380011785556138b8565b828001600101855582156138b8579182015b828111156138b857825182559160200191906001019061389d565b506138c4929150613ad7565b5090565b60405180606001604052806000815260200160008152602001613716613ab8565b6040518061010001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200161371661371b565b60405180602001604052806001905b613963604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161393d5790505090565b604051806020016040528061371661371b565b60405180610100016040528060006001600160a01b031681526020016139b0613ab8565b81526020016139bd613ab8565b815260200160008152602001600081526020016139d861392e565b81526020016000815260200161371661371b565b60405180610280016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001613a45613ab8565b8152602001613a52613ab8565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001613a9061371b565b815260006020820152604001613aa461392e565b815260200160008152602001600081525090565b6040518061012001604052806009906020820280368337509192915050565b5b808211156138c45760008155600101613ad8565b604051806101c0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001613b45613ab8565b8152602001613b52613ab8565b81526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060c0016040528060008152602001613b9c61371b565b81526000602082018190526040820152606001613bb761392e565b8152602001600081525090565b600060408284031215613bd657600080fd5b50919050565b600060408284031215613bee57600080fd5b61313f8383613bc4565b600060a08284031215613bd657600080fd5b60005b83811015613c25578181015183820152602001613c0d565b83811115611f015750506000910152565b8281526040602082015260008251806040840152613c5b816060850160208701613c0a565b601f01601f1916919091016060019392505050565b8060005b6009811015611f015781516001600160a01b0316845260209384019390910190600101613c74565b8060005b6009811015611f01578151845260209384019390910190600101613ca0565b80516001600160a01b031682526020810151613ce660208401826001600160a01b03169052565b5060408101516040830152606081015160608301526080810151608083015260a081015160a083015260c0810151613d2260c084018215159052565b5060e081015160e083015261010080820151818401525061012080820151613d4c82850182613c70565b5050610140810151613d62610240840182613c9c565b5061016081015161036083015261018001516001600160a01b031661038090910152565b6103a081016130938284613cbf565b60006103808284031215613bd657600080fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715613de157613de1613da8565b60405290565b6040516020810167ffffffffffffffff81118282101715613de157613de1613da8565b6040516080810167ffffffffffffffff81118282101715613de157613de1613da8565b604051610160810167ffffffffffffffff81118282101715613de157613de1613da8565b6040516101a0810167ffffffffffffffff81118282101715613de157613de1613da8565b60405160a0810167ffffffffffffffff81118282101715613de157613de1613da8565b6040516060810167ffffffffffffffff81118282101715613de157613de1613da8565b604051610280810167ffffffffffffffff81118282101715613de157613de1613da8565b604051610100810167ffffffffffffffff81118282101715613de157613de1613da8565b604051610120810167ffffffffffffffff81118282101715613de157613de1613da8565b6001600160a01b03811681146137dd57600080fd5b803561298e81613f27565b60008183036040811215613f5a57600080fd5b613f62613dbe565b833581526020601f1983011215613f7857600080fd5b613f80613de7565b91506020840135613f9081613f27565b825260208101919091529392505050565b80151581146137dd57600080fd5b600081830360a0811215613fc257600080fd5b613fca613dbe565b833581526080601f1983011215613fe057600080fd5b613fe8613de7565b9150613ff2613e0a565b60208501356003811061400457600080fd5b8152604085013561401481613fa1565b6020820152606085013561402781613fa1565b6040820152608085013561403a81613fa1565b6060820152825260208101919091529392505050565b60006040828403121561406257600080fd5b61406a613dbe565b82358152602083013561407c81613fa1565b60208201529392505050565b634e487b7160e01b600052602160045260246000fd5b600181811c908216806140b257607f821691505b60208210811415613bd657634e487b7160e01b600052602260045260246000fd5b600082601f8301126140e457600080fd5b6140ec613f03565b806101208401858111156140ff57600080fd5b845b8181101561412257803561411481613f27565b845260209384019301614101565b509095945050505050565b600082601f83011261413e57600080fd5b614146613f03565b8061012084018581111561415957600080fd5b845b8181101561412257803584526020938401930161415b565b600081830361038081121561418757600080fd5b61418f613dbe565b8335815261036080601f19840112156141a757600080fd5b6141af613e2d565b92506141bd60208601613f3c565b835260408501356020840152606085013560408401526080850135606084015260a085013560808401526141f48660c087016140d3565b60a0840152614207866101e0870161412d565b60c084015261030085013560e084015261032085013561010084015261034085013561012084015290930135610140820152602083015250919050565b805161298e81613f27565b600082601f83011261426057600080fd5b614268613f03565b8061012084018581111561427b57600080fd5b845b8181101561412257805161429081613f27565b84526020938401930161427d565b805161298e81613fa1565b600082601f8301126142ba57600080fd5b6142c2613f03565b806101208401858111156142d557600080fd5b845b818110156141225780518452602093840193016142d7565b60006103a0828403121561430257600080fd5b61430a613e51565b905061431582614244565b815261432360208301614244565b602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015261435c60c0830161429e565b60c082015260e082015160e08201526101008083015181830152506101206143868482850161424f565b908201526143988361024084016142a9565b6101408201526103608201516101608201526143b76103808301614244565b61018082015292915050565b600061062082840312156143d657600080fd5b6143de613e75565b82516143e981613f27565b81526143f8846020850161424f565b602082015261440b8461014085016142ef565b60408201526104e083015160608201526144298461050085016142a9565b60808201529392505050565b634e487b7160e01b600052603260045260246000fd5b600082601f83011261445c57600080fd5b614464613de7565b8060608085018681111561447757600080fd5b855b818110156144c8578281890312156144915760008081fd5b614499613e98565b81518152602080830151818301526040808401516144b681613fa1565b90830152908652909401938201614479565b50919695505050505050565b600061084082840312156144e757600080fd5b6144ef613ebb565b6144f883614244565b815261450660208401614244565b602082015261451760408401614244565b6040820152606083015160608201526080830151608082015260a083015160a08201526145478460c0850161424f565b60c08201526101e061455b858286016142a9565b60e08301526103008401516101008301526103208401516101208301526103408401516101408301526103608401516101608301526103808401516101808301526103a08401516101a08301526103c08401516101c08301526145c2856103e086016142ef565b908201526145d36107808401614244565b6102008201526145e7846107a0850161444b565b6102208201526108008301516102408201526108209092015161026083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160c0830191906003811061464d57634e487b7160e01b600052602160045260246000fd5b806040850152506020810151151560608401526040810151151560808401526060810151151560a0840152509392505050565b600060e0828403121561469257600080fd5b61469a613e75565b82516146a581613f27565b81526020838101519082015260408301516146bf81613f27565b60408201526146d1846060850161444b565b606082015260c09290920151608083015250919050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b81516001600160a01b0316815260208083015161062083019161473590840182613c70565b506040830151614749610140840182613cbf565b5060608301516104e08301526080830151614768610500840182613c9c565b5092915050565b60006106c0828403121561478257600080fd5b61478a613edf565b61479383614244565b81526147a2846020850161424f565b60208201526147b58461014085016142a9565b6040820152610260830151606082015261028083015160808201526147de846102a0850161444b565b60a082015261030083015160c08201526147fc8461032085016142ef565b60e08201529392505050565b634e487b7160e01b600052601160045260246000fd5b600060001982141561483257614832614808565b5060010190565b6001600160a01b0383811682528251602080840191909152830151805190911660408301526103a08201906020810151606084015260408101516080840152606081015160a0840152608081015160c084015260a081015161489e60e0850182613c70565b5060c08101516148b2610200850182613c9c565b5060e0810151610320840152610100810151610340840152610120810151610360840152610140810151610380840152509392505050565b6000828210156148fc576148fc614808565b500390565b600081600019048311821515161561491b5761491b614808565b500290565b60008261493d57634e487b7160e01b600052601260045260246000fd5b500490565b6000821982111561495557614955614808565b500190565b8060005b6001811015611f0157815180518552602080820151818701526040918201511515918601919091526060909401939091019060010161495e565b81516001600160a01b031681526020808301516106c08301916149bd90840182613c70565b5060408301516149d1610140840182613c9c565b506060830151610260830152608083015161028083015260a08301516149fb6102a084018261495a565b5060c083015161030083015260e0830151614768610320840182613cbf565b81516001600160a01b0316815261084081016020830151614a4660208401826001600160a01b03169052565b506040830151614a6160408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c0830151614a9260c0840182613c70565b5060e08301516101e0614aa781850183613c9c565b6101008501516103008501526101208501516103208501526101408501516103408501526101608501516103608501526101808501516103808501526101a08501516103a08501526101c08501516103c08501528401519050614b0e6103e0840182613cbf565b506102008301516001600160a01b0316610780830152610220830151614b386107a084018261495a565b50610240830151610800830152610260909201516108209091015290565b60008251614b68818460208701613c0a565b9190910192915050565b600060208284031215614b8457600080fd5b815161313f81613fa156fea2646970667358221220f1d8b086529402fd42be403696de5b6fa5298d926ac027fefd4af0a03a8717fb64736f6c634300080c0033`,
  BytecodeLen: 21072,
  Which: `oD`,
  version: 7,
  views: {
    state: `state`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:35:11:after expr stmt semicolon',
    fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:98:45:application call to "construct" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:28:40:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:91:3:function exp)'],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './interface.rsh:186:15:after expr stmt semicolon',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './interface.rsh:305:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './interface.rsh:321:13:after expr stmt semicolon',
    fs: ['at ./interface.rsh:342:5:application call to [unknown function] (defined at: ./interface.rsh:316:25:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './interface.rsh:330:13:after expr stmt semicolon',
    fs: ['at ./interface.rsh:342:5:application call to [unknown function] (defined at: ./interface.rsh:316:25:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './interface.rsh:340:13:after expr stmt semicolon',
    fs: ['at ./interface.rsh:342:5:application call to [unknown function] (defined at: ./interface.rsh:316:25:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './interface.rsh:222:45:after expr stmt semicolon',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:127:26:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Auctioneer": Auctioneer,
  "Constructor": Constructor,
  "Relay": Relay,
  "Verifier": Verifier,
  "acceptOffer": acceptOffer,
  "cancel": cancel,
  "touch": touch
  };
export const _APIs = {
  acceptOffer: acceptOffer,
  cancel: cancel,
  touch: touch
  };
