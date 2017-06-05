angular.module("gravatar", []);

angular.module("gravatar").factory("Avatar", function(){
    var size = 80;
    var url = "https://www.gravatar.com/avatar/";

    return {
        generate : function(email){
            return url + CryptoJS.MD5(email) + "?size=" + size;
        }
    }
})
