export const getBase64 = (file:any,callback:any) =>{
	console.log('blas')
	const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
		callback(reader.result);
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}