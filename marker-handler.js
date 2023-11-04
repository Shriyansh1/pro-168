AFRAME.registerComponent("handler",{
    init:function(){this.el.addEventListener("markerFound",()=>{
        this.handlemarkerFound()
    })
    this.el.addEventListener("markerLost",()=>{
        this.handlemarkerLost()})
},
    handlemarkerFound:function(){
        var buttonDiv=doucment.getElementById("button-div")
        buttonDiv.style.display="flex"
        var taare=document.getElementById("Rating")
        var mangalo=document.getElementById("Order")
        taare.addEventListener("click",()=>{
            swal({icon:"Warning",
        title:"kesa laga khana",
        text:"aapka khana abhi pak raha hai"})
        })
        mangalo.addEventListener("click",()=>{
            swal({icon:"Happymeal",
        title:"Shukriya",
        text:"aapka khana abhi pak ke aapke ghar ke samne hoga"})
        })
    },
    handlemarkerLost:function(){
        var buttonDiv=doucment.getElementById("button-div")
        buttonDiv.style.display="none"
    }
}
)