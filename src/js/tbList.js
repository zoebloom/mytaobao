
function getGoods(){
    $.get("./php/getGoodsList.php","typeId=001",function(data){
        let htmlStr = "";
        data.forEach(item => {
            htmlStr += `
            <div class="item">
                <div class="pic-box">
                    <div class="pic">
                        <a href="goods.html?goodsId=${item.goodsId}">
                            <img src="${item.goodsImg}" alt="">
                        </a>
                    </div>
                </div>
                <div class="ctx-box">
                    <div class="row row-1">
                        <div class="pirce">
                            <span>￥</span>
                            <strong>${item.goodsPrice}</strong>
                        </div>
                        <div class="iconfont icon-icon-test"></div>
                    </div>
                    <div class="row row-2 title">
                        <a href="#" class="link">
                            ${item.goodsDesc}
                            <span class="H">${item.goodsName}</span>
                            ${item.beiyong1}
                        </a>
                    </div>
                    <div class="row row-3">
                        <div class="shop float_l">
                            <a href="#" class="shopname">${item.beiyong2}</a>
                        </div>
                        <div class="location float_r">${item.beiyong3}</div>
                    </div>
                    <div class="row row-4">
                        <div class="feature-icons icon-has-more">
                            <ul class="icons">
                                <li class="icon">
                                    <a href="#">
                                        <span class="iconfont icon-tianmao"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="wangwang">
                            <a href="#">
                                <span class="iconfont icon-wangwang"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            `
        });
        $(".mainsrp-itemlist .items").html(htmlStr);
    },"json")
}

$(function(){
    getGoods()
})