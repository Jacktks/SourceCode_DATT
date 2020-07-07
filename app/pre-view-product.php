<?php
  include("connect.php");
  if(isset($_POST['id_pro'])){
    $id = $_POST['id_pro'];
    $sql = "select * from products where product_id='$id'";
    $result = mysqli_query($conn, $sql);
    while ($row = mysqli_fetch_array($result)) {
      # code...
?>

<div class="overlay-modal1 js-hide-modal1"></div>
<div class="container">
  <div class="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
    <button class="how-pos3 hov3 trans-04 js-hide-modal1">
      <img src="images/icons/icon-close.png" alt="CLOSE">
    </button>

    <div class="row">
      <div class="col-md-6 col-lg-7 p-b-30">
        <div class="p-l-25 p-r-30 p-lr-0-lg">
          <div class="wrap-slick3 flex-sb flex-w">
            <div class="wrap-slick3-dots"></div>
            <div class="wrap-slick3-arrows flex-sb-m flex-w"></div>

            <div class="slick3 gallery-lb">
              <div class="item-slick3" data-thumb="images/product-detail-01.jpg">
                <div class="wrap-pic-w pos-relative">
                  <img src="images/<?php echo $row['image']; ?>" alt="IMG-PRODUCT">

                  <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/<?php echo $row['image']; ?>">
                    <i class="fa fa-expand"></i>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-5 p-b-30">
        <div class="p-r-50 p-t-5 p-lr-0-lg">
          <h4 class="mtext-105 cl2 js-name-detail p-b-14">
            <?php echo $row['name']; ?>
          </h4>

          <span class="mtext-106 cl2">
            $<?php echo $row['price']; ?>
          </span>

          <p class="stext-102 cl3 p-t-23">
            <?php echo $row['description']; ?>
          </p>

          <!--  -->
          <div class="p-t-33">
            <div class="flex-w flex-r-m p-b-10">
              <div class="size-204 flex-w flex-m respon6-next">
                <form action="add-to-cart.php" method="get">
                    <input type="hidden" name="product-id" value="<?php echo $row['product_id']; ?>">
                    <div class="wrap-num-product flex-w m-r-20 m-tb-10">
                      <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                        <i class="fs-16 zmdi zmdi-minus"></i>
                      </div>

                      <input class="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value="1">

                      <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                        <i class="fs-16 zmdi zmdi-plus"></i>
                      </div>
                    </div>

                    <button type="submit" name="add-cart" value="add-cart" class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                      Add to cart
                    </button>
                  </form>
              </div>
            </div>
          </div>

          <!--  -->
          <div class="flex-w flex-m p-l-100 p-t-40 respon7">
            <div class="flex-m bor9 p-r-10 m-r-11">
              <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
                <i class="zmdi zmdi-favorite"></i>
              </a>
            </div>

            <a href="https://www.facebook.com/jacktks.sattarius" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
              <i class="fa fa-facebook"></i>
            </a>

            <a href="https://www.instagram.com/Jacktks.Sattarius" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
              <i class="fa fa-twitter"></i>
            </a>

            <a href="https://gmail.com" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
              <i class="fa fa-google-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<?php
    }
  }
?>