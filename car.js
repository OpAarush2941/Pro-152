AFRAME.registerComponent("move", {
    schema:{
        moveZ:{type:"number", default:0},
    },
    tick: function(){
        window.addEventListener("click", (e) =>{
            this.data.moveZ = this.data.moveZ + 0.00009
        });
        var pos = this.el.getAttribute("position");
        pos.z = pos.z + this.data.moveZ
        this.el.setAttribute("position",{x: pos.x, y: pos.y, z: pos.z})
    },
});