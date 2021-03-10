window.Inventory = {
    allSizes: (function(small,large){
        var sizes = [];
        for(var i = small; i<=large;i++) {
            sizes.push(i);
            sizes.push(i+0.5);
        }
        return sizes;
    })(7,12)
}