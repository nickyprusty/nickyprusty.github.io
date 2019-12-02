function goToModule(moduleNumber){
    console.log("here",moduleNumber)
    sessionStorage.setItem('moduleNumber',moduleNumber)
    window.open(moduleNumber)
}