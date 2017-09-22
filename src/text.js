let x = function () {
    console.log(this);

    function a() {
        console.log(this);
    }

    a();
};

x();