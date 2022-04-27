

function getDownloadLink(){
    console.log(getPlatform())
    return "https://github.com/AxolotlClient/Axolotlclient-launcher/releases/latest/"+getLatestVersion(getPlatform())
}

function init(){
    var btn = document.getElementById("download")
    btn.setAttribute('href', getDownloadLink())
}

function getPlatform(){
    var appVersion = navigator.appVersion
    if(appVersion.indexOf("Linux")!=-1 || appVersion.indexOf("X11")!=-1){
        return "linux"
    } else if(appVersion.indexOf("Win")!=-1){
        return "windows"
    } else if(appVersion.indexOf("Mac")!=-1){
        return "macos"
    }
}

function httpGet(Url) {
    let text
    axios.get(Url)
    .then(data=>text=data)
    .catch(err=>console.log(err))
    return text
}

function getLatestVersion(platform){
    if(platform=="linux"){
        var text = httpGet("https://github.com/AxolotlClient/Axolotlclient-launcher/releases/download/latest/latest-linux.yml")
    } else if(platform=="windows"){
        var text = httpGet("https://github.com/AxolotlClient/Axolotlclient-launcher/releases/download/latest/latest.yml")
    } else if(platform=="macos"){
        var text = httpGet("https://github.com/AxolotlClient/Axolotlclient-launcher/releases/download/latest/latest-mac.yml")
    }
    return text.path
}
