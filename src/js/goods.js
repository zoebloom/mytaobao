
function getDetail(){
    let goodsId = location.search.split("=")[1];
    $.get("./php/getGoodsInfo.php",
    "goodsId="+goodsId,
    function(data){
        let htmlStr = `
        <div class="tm-detail">
            <div class="tm-left">
                <div class="tb-booth">
                    <a href="#">
                        <span class="iconfont icon-weibiaoti106"></span>
                        <span class="tb-img">
                            <img src="${data.goodsImg}" alt="">
                        </span>
                    </a>
                </div>
                <div class="tb-thumb">
                    <ul>
                        <li>
                            <a href="#">
                                <img src="https://img.alicdn.com/imgextra/i1/1917047079/O1CN01wDZzJk22AEL8RvrHh_!!2-item_pic.png_60x60q90.jpg" alt="">
                            </a>
                        </li>
                        <li class="tb-selected">
                            <a href="#">
                                <img src="https://img.alicdn.com/imgextra/i4/1917047079/O1CN01AbSaIu22AEL1crrmU_!!2-item_pic.png_60x60q90.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="https://img.alicdn.com/imgextra/i4/1917047079/O1CN012NYRrP22AEL1yxgLu_!!2-item_pic.png_60x60q90.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="https://img.alicdn.com/imgextra/i1/1917047079/O1CN01Ug41VT22AEL84ND7H_!!2-item_pic.png_60x60q90.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="https://img.alicdn.com/imgextra/i1/1917047079/O1CN01WjRdBN22AEL3lctKW_!!2-item_pic.png_60x60q90.jpg" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
                <p class="tm-action">
                    <span class="action-item float_r">
                        <a href="#">举报</a>
                    </span>
                    <a href="#">
                        <i class="iconfont icon-xingxing1x"></i>
                        <span>收藏商品</span>
                    </a>
                    <span>（12423人气）</span>
                </p>
            </div>
            <div class="tm-right">
                <div class="right-hd">
                    <h1>
                        <a href="#">${data.goodsDesc}${data.beiyong1}</a>
                    </h1>
                </div>
                <div class="right-price">
                    <dl>
                        <dt class="tb-metatit">价格</dt>
                        <dd>
                            <em>￥</em>
                            <span>${data.goodsPrice}</span>
                        </dd>
                    </dl>
                </div>
                <div class="right-meta">
                    <dl>
                        <dt class="tb-metatit">运费</dt>
                        <dd>
                            <div class="tb-postAge">
                                <span class="tb-add">${data.beiyong3}</span>
                                <span class="addr">
                                    <span class="addr1">
                                        金华
                                        <i class="iconfont icon-angle-down"></i>
                                    </span>
                                    <span class="addr2">
                                        婺城区
                                        <i class="iconfont icon-angle-down"></i>
                                    </span>
                                </span>
                                <div class="postAge-info">
                                    <p>
                                        <span>快递：0.00</span>
                                    </p>
                                </div>
                                <div class="friInfo">确认收货地，以确保在商家销售区域</div>
                                <div class="signText">付款后12天内发货</div>
                            </div>
                        </dd>
                    </dl>
                </div>
                <ul class="right-ind">
                    <li class="right-ind-item">
                        <span class="tm-label">累计评价</span>
                        <span class="tm-count">197</span>
                    </li>
                    <li class="right-ind-item">
                        <a href="#">
                            <span class="tm-label">送天猫积分</span>
                            <span class="tm-count">799</span>
                        </a>
                    </li>
                </ul>
                <div class="tb-key">
                    <div class="tb-skin">
                        <div class="tb-sku">
                            <dl class="tb-prop">
                                <dt class="tb-metatit">颜色分类</dt>
                                <dd>
                                    <ul>
                                        <li class="tb-txt">
                                            <a href="#">深空灰色</a>
                                        </li>
                                        <li class="tb-txt">
                                            <a href="#">金色</a>
                                        </li>
                                        <li class="tb-txt">
                                            <a href="#">银色</a>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl class="tb-amount">
                                <dt class="tb-metatit">数量</dt>
                                <dd>
                                    <span>
                                        <input type="text" value="1" maxlength="8" title="请输入购买量">
                                    </span>
                                    <span class="amount-btn">
                                        <span class="iconfont icon-shangjian"></span>
                                        <span class="iconfont icon-angle-down"></span>
                                    </span>
                                </dd>
                            </dl>
                            <dl class="tb-hidden tb-prop">
                                <dt class="tb-metatit">花呗分期</dt>
                                <dd>
                                    <div class="huabei">
                                        <p class="info">
                                            <i class="iconfont icon-huabei"></i>
                                            商品最高可享6期免息
                                        </p>
                                    </div>
                                    <div class="mui-msg">
                                        <div class="mui-msg-con">
                                            <a href="#">登录</a>
                                            后确认是否享有该服务
                                            <a href="#">什么是花呗分期</a>
                                        </div>
                                    </div>
                                    <ul class="tm-clear">
                                        <li>
                                            <a href="#">
                                                <span>
                                                    <span>
                                                        <em>￥</em>
                                                        <strong>${parseInt(data.goodsPrice/3)}</strong>
                                                        x3期
                                                    </span><br>
                                                    <span>
                                                        (
                                                            <strong>0</strong>
                                                            手续费)
                                                    </span>
                                                </span>
                                            </a>
                                            <i>已选中</i>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>
                                                    <span>
                                                        <em>￥</em>
                                                        <strong>${parseInt(data.goodsPrice/6)}</strong>
                                                        x6期
                                                    </span><br>
                                                    <span>
                                                        (
                                                            <strong>0</strong>
                                                            手续费)
                                                    </span>
                                                </span>
                                            </a>
                                            <i>已选中</i>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>
                                                    <span>
                                                        <em>￥</em>
                                                        <strong>${parseInt(data.goodsPrice/12)}</strong>
                                                        x12期
                                                    </span><br>
                                                    <span>
                                                        (含手续费)
                                                    </span>
                                                </span>
                                            </a>
                                            <i>已选中</i>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>
                                                    <span>
                                                        <em>￥</em>
                                                        <strong>${parseInt(data.goodsPrice/18)}</strong>
                                                        x18期
                                                    </span><br>
                                                    <span>
                                                        (含手续费)
                                                    </span>
                                                </span>
                                            </a>
                                            <i>已选中</i>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>
                                                    <span>
                                                        <em>￥</em>
                                                        <strong>${parseInt(data.goodsPrice/24)}</strong>
                                                        x24期
                                                    </span><br>
                                                    <span>
                                                        (含手续费)
                                                    </span>
                                                </span>
                                            </a>
                                            <i>已选中</i>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                            <div class="tb-action">
                                <div class="tb-btn-buy tb-btn-sku">
                                    <a href="#">
                                        立即购买
                                        <span class="ensureText">确认</span>
                                    </a>
                                </div>
                                <div class="tb-btn-basket tb-btn-sku">
                                    <a href="#">
                                        <i class="iconfont icon-gouwuche"></i>
                                        立即购买
                                        <span class="ensureText">确认</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        $("#page #detail").html(htmlStr)
    },"json");
}

$(function(){
    getDetail();
})