function setLocal(array) {
    localStorage.setItem('projectArray', JSON.stringify(array))
};


function getLocal() {
   return JSON.parse(localStorage.getItem('projectArray'));
};



export {setLocal, getLocal};