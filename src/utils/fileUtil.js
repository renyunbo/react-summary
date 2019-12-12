import * as fetch from './fetch'; 
import * as constants from '../redux/constants/Constants';

const FILEMETA_PATH='/file_api/filemeta';	//获取文件
 
/*
	添加文件获取Token
	HRO现有业务类型：crm  (客户管理)、recruit (招聘管理)、contract(合同管理)、user_image(个人图像)、tenant_logo(企业logo)
	object_type	string	业务类型	Yes
	access_type	string	接入类别, 比如sdk\web_upload	Yes
*/ 
const getTokenForFile=(object_type,access_type='web_upload',options={})=>{
		const url=FILEMETA_PATH+'/inits';
		return fetch.post(url,{ 
			  object_type, 
			  access_type 
			},options); 
}

//url split bucket
const splitBucket=(url)=>{
	let tempUrl=url,bucket='',filePath='';
	if(url&&url.indexOf("/")==0){
		tempUrl=url.substring(1);
	}
	bucket=tempUrl.substring(0,tempUrl.indexOf("/"));
	filePath=tempUrl.substring(tempUrl.indexOf("/")+1);
	return {
		bucket,
		path:filePath
	} 
}

//download File
const downloadFileByUrl=(url)=>{
	const fileObject=splitBucket(url);
	if(fileObject.bucket==`${window.oss.bucket}`){
		window.open('/filemeta?t='+new Date().getTime()+'&bucket='+fileObject.bucket+'&object='+fileObject.path);
	}else{
		window.open(`http://${window.oss.public_bucket}.${window.oss.end_point}/${fileObject.path}`);
	}
}

//下载对象重定向
const getDownloadRedirect=(fileObject)=>{
	return '/filemeta?t='+new Date().getTime()+'&bucket='+fileObject.bucket+'&object='+fileObject.path;
}


//下载对象返回JSON
const getDownloadPath=(fileObject)=>{
	return FILEMETA_PATH+'/object-redirect'+'?t='+new Date().getTime()+'&bucket='+fileObject.bucket+'&object='+fileObject.path;
}

const deleteFile = (fileId) => {
	return fetch.post(
			'files/delete', 
			{'file_id':fileId});
}

// const getToken =(file_id)=>{
// 	return fetch.post('/getObjectTokenByID',{file_id},);
// }

const getTokenForPdf =(path)=>{
	return fetch.post('/api/tokens',{"object_path":path},constants.METADATA);
}

const downloadFile = (bucket, path, name,file_id) =>{
	if(!file_id)
		return
	const w=window.open('about:blank'); 
	getToken(file_id).then(data=>{
		var client = new OSS({ 
			endpoint: `http://${window.oss.end_point}`,
			accessKeyId: data.access_key_id,//'SX9nVDsfn54Tsl2K',
			accessKeySecret: data.access_key_secret,//'VoYVvrMZyWBfVG9sBgA2UCqSczJnoL',
			stsToken: data.security_token,
			bucket:bucket
		});
		path = path;
		console.log(path);
		var url = client.signatureUrl(path, {
			expires: 3600,
			'content-disposition': 'attachment; filename="' + name + '"'
		});
		console.log(url);  
		w.location.href=url; 
	}) 
}

const showPdfView = (path) =>{
	if(!path)
		return
	const w=window.open('about:blank'); 
	getTokenForPdf(path).then(data=>{
		var client = new OSS({ 
			endpoint: `http://${window.oss.end_point}`,
			accessKeyId: data.access_key_id,//'SX9nVDsfn54Tsl2K',
			accessKeySecret: data.access_key_secret,//'VoYVvrMZyWBfVG9sBgA2UCqSczJnoL',
			stsToken: data.security_token,
			// bucket:data.bucket
		});
		path = path;
		console.log(path);
		var url = client.signatureUrl(path, {
			expires: 3600,
			'content-disposition': 'attachment; filename="' + name + '"'
		});
		console.log(url);   
		// w.location.href='/hr/viewPdf?pdfPath='+url; 
		w.location.href=url;
	}) 
}

const showPic = (bucket, path, name,file_id) =>{
	console.log(!file_id)
	
	if(file_id){
		// const w=window.open('about:blank'); 
		let url;
		getToken(file_id).then(data=>{
			var client = new OSS({ 
				endpoint: `http://${window.oss.end_point}`,
				accessKeyId: data.access_key_id,//'SX9nVDsfn54Tsl2K',
				accessKeySecret: data.access_key_secret,//'VoYVvrMZyWBfVG9sBgA2UCqSczJnoL',
				stsToken: data.security_token,
				bucket:bucket
			});
			path = path;
			console.log(path);
			url = client.signatureUrl(path, {
				expires: 3600,
				'content-disposition': 'attachment; filename="' + name + '"'
			});
			console.log(url);  
			
			// w.location.href=url; 
		})
		return url
	}
	
}


//下载云表格
const cloudDown = (data)=>{//云下载方法

	const w=window.open('about:blank'); 
	var client = new OSS({
		endpoint:`http://${window.oss.end_point}`,
		accessKeyId: data.access_key_id,
		accessKeySecret: data.access_key_secret,
		stsToken: data.security_token,
		bucket:data.bucket
	});
	let path=data.object_path;
	console.log(path);
	let name='employeeTableData';
	var url = client.signatureUrl(path,{
		expires: 3600,
		'content-disposition': 'attachment; filename="' + name + '"'
	});
	console.log(url);
	window.location.href=url;

}


const downloadForm=(sn,formName)=>{
	const serviceName=getServiceUrl(sn);
	const w=window.open('about:blank'); 
	fetch.post('/files/exportFormExcel',{serviceName,formName}).then(data=>{
		var client = new OSS({ 
			endpoint: "http://"+data.domain,
			accessKeyId: data.access_key_id,//'SX9nVDsfn54Tsl2K',
			accessKeySecret: data.access_key_secret,//'VoYVvrMZyWBfVG9sBgA2UCqSczJnoL',
			stsToken: data.security_token,
			bucket:data.bucket
		});
		const path = data.object_path;
		console.log(path);
		var url = client.signatureUrl(path, {
			expires: 3600,
			'content-disposition': 'attachment; filename="' + formName + '"'
		});
		console.log(url);  
		w.location.href=url; 
	}) 
}

// const downloadFile = (bucket, path, name) =>{ 
// 	co(function* () {
// 	  var token = yield sts.assumeRole(
// 	    '<role-arn>', policy, 15 * 60, '<session-name>');

// 		var client = new OSS({
// 		   endpoint: "http://oss-cn-beijing.aliyuncs.com",
// 		    accessKeyId: 'STS.JDiY8ogubG1z5BEd4HJ31d4Bh',
// 		    accessKeySecret: "9798iZyPUJTqW5m6xkHYqGyeNX5Ev8CJKsxrXbkGt1uR",
// 		    stsToken: "CAESpgMIARKAAX1kQtRJSYaCH+RwupSBTEpiFoq8+Di6ZKPxUhqQ+pgQttQI/tSYmeopxlhCOhlbOFpEtoGMM4ZeEeHk87ypV405lorN4Cf/rrxY6XJ0MuHM76eL21Ib/icnNA+oPkWfN/O8GoerQJN/w8elmPqKcjS3UM4XRnAmy3OpQOHtMou5Gh1TVFMuSkRpWThvZ3ViRzF6NUJFZDRISjMxZDRCaCISMzkxMDI3MzQzMTUzNzc3MzUzKgVoZWxsbzDNq6iCvio6BlJzYU1ENUKGAQoBMRqAAQoFQWxsb3cSNgoMQWN0aW9uRXF1YWxzEgZBY3Rpb24aHgoNb3NzOkdldE9iamVjdAoNb3NzOlB1dE9iamVjdBI/Cg5SZXNvdXJjZUVxdWFscxIIUmVzb3VyY2UaIwohYWNzOm9zczoqOjE5NzYzMjYzNDEyNDMyNTI6aHJveC8qShAxOTc2MzI2MzQxMjQzMjUyUgUyNjg0MloPQXNzdW1lZFJvbGVVc2VyYABqEjM5MTAyNzM0MzE1Mzc3NzM1M3IEaHJveHj04p6s1a7BAw==",
// 		    bucket:bucket
// 		});

// 	  	path = path;
// 		console.log(path);
// 		var url = client.signatureUrl(path, {
// 			expires: 3600,
// 			'content-disposition': 'attachment; filename="' + name + '"'
// 		});
// 		console.log(url);  
// 		window.open(url);

// 	}).catch(function (err) {
// 	  console.log(err);
// 	});
// }

const importData=(file_path,form_name,sn)=>{
	const service_name=getServiceUrl(sn);
	return fetch.post('/files/uploadfile',{file_path,form_name,service_name});
}

const importColData=(file_path,form_name,sn,field_name)=>{
	const service_name=getServiceUrl(sn);
	return fetch.post('/files/uploadfileimport',{file_path,form_name,service_name,field_name});
}

const doMapping=(params)=>{
	return fetch.post('/hr/doMapping',params);
}
const doRepeat=(params)=>{
	return fetch.post('/hr/handleDuplicate',params);
}
const doConflict=(params)=>{
	return fetch.post('/hr/handleConflict',params);
}


const getServiceUrl = (service)=>{
	var serviceUrl = '';
	switch(service){
		case 'hr':
			serviceUrl = "hrUrl";
			break;
		default:
			break;
	}
	return serviceUrl;
}

const urlEncode=(str)=>{
	return encodeURI(str);
}

const urlDecode=(str)=>{
	return decodeURI(str); 
}


const getToken =(file_id)=>{
    return fetch.get(`/api/objects/${file_id}`,constants.METADATA);
}


const getPDFJson = (url,options={})=>{
	return fetch.get(url, options);
}



export default{
	deleteFile,
	downloadFile,
	downloadForm,
	cloudDown,
	importData,
	importColData,
	doMapping,
	doRepeat,
	doConflict,
	getToken,
	showPic,
	urlEncode,
	urlDecode,
	showPdfView,
	getTokenForFile,
	getDownloadPath,
	getDownloadRedirect,
	downloadFileByUrl,
	splitBucket,
	getPDFJson
};
