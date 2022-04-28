

function init(){
    setDownloadLink()
    loadBg()
}

function getPlatform(){
    var appVersion = navigator.appVersion
    if(appVersion.indexOf("Linux")!=-1 || appVersion.indexOf("X11")!=-1){
        return "linux"
    } else if(appVersion.indexOf("Win")!=-1){
        return "windows"
    } else if(appVersion.indexOf("Mac")!=-1){
        if(navigator.platform.indexOf("x86-64")!=-1){
            return "macos-x64"
        }
        return "macos-arm64"
    }
}

function getPlatformExtension(){
    if(getPlatform() == "linux"){
        return ".AppImage"
    } else if(getPlatform() == "windows"){
        return ".exe"
    } else if (getPlatform() == "macos-x64"){
        return "-x64.dmg"
    } else if (getPlatform() == "macos-arm64"){
        return "-arm64.dmg"
    }
    return "Unknown"
}

function setDownloadLink(){

    fetch("https://api.github.com/repos/AxolotlClient/Axolotlclient-launcher/releases/latest",
          {
        headers: {
            "Content-Type": "application/x-www-form-urlencocoded",
        },
        method: "GET"
        }
    )
    .then(data=>data.json())
    .then(data=>{

        var version = data.tag_name.substring("1")
        var btn = document.getElementById("download")
        btn.setAttribute('href', "https://github.com/AxolotlClient/Axolotlclient-launcher/releases/download/"+data.tag_name+"/AxolotlClient-"+version+getPlatformExtension())
        return data.tag_name
    })
    .catch(err=>console.log(err))
}

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function loadBg(){
    var img = document.getElementById("bg")
    //console.log(img)
     img.src = "images/"+randomIntFromInterval(0,8)+".jpg"
    //document.body.style.backgroundImage = "url(images/"+randomIntFromInterval(1,4)+".jpg)"
}
