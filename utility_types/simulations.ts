// USING TYPE
type CommonResponseType = {
  ACK: string;
  error?: string;
  ResponseCode: number;
  status?: string;
};

type ScrimResponse = CommonResponseType & {
  data: string;
};

// USING INTERFACE
interface CommonResponseInterface {
  ACK: string;
  error?: string;
  ResponseCode: number;
  status?: string;
}

interface ScrimResponseInterface extends CommonResponseInterface {
  data: string;
}

// TEST TYPE
const dataObj: ScrimResponse = {
  data: "Hello Type",
  ACK: "OK",
  ResponseCode: 200,
  status: "SUCCESS",
};

const { data: dataOnly } = dataObj;
console.log(dataObj);
console.log(dataOnly);

console.log('-------------');
// TEST INTERFACE
const dataObjIntf: ScrimResponseInterface = {
    data: "Hello Interface",
    ACK: "OK",
    ResponseCode: 200,
    status: "SUCCESS",
  };
  
  const { data: dataOnlyIntf } = dataObjIntf;
  console.log(dataObjIntf);
  console.log(dataOnlyIntf);
