Page({
    go: function(){
        console.log('hhhhhh')
        tt.navigateTo({
            url: `pages/go/index`,
            success (res) {
                console.log(`success`);
            },
            fail (res) {
                console.log(`navigateTo调用失败`);
            }
        });
      }
})