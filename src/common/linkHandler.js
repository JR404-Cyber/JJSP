const linkHandler = (link) => {
    setTimeout(() => {
        switch (link) {
            case "facebook":
                window.open('https://www.facebook.com/profile.php?id=100079300536071',"_blank");
                break;
        
            case "instagram":
                window.open('https://www.instagram.com/mr.julfikarrayim/#',"_blank");
                break;
        
            case "google":
                window.open('https://www.google.com',"_blank");
                break;
        
            case "github":
                window.open('https://github.com/JR404-Cyber',"_blank");
                break;
        
            default:
                break;
        }
    }, 1000);
}

export default linkHandler;