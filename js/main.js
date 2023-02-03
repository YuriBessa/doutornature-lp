document.addEventListener("DOMContentLoaded", function () {
  function initialLink() {
    let botaoCarrinho = document.querySelector("#btn_carrinho");
    botaoCarrinho.setAttribute(
      "href",
      botaoCarrinho.getAttribute("href-compra-unica-3")
    );
    document.querySelector("#pote-3").classList.add("active");
  }

  initialLink();

  function ajustarPreco() {
    let kit_selecionado = "";
    if (document.querySelector("#pote-1").classList.contains("active")) {
      kit_selecionado = "1";
    } else if (document.querySelector("#pote-3").classList.contains("active")) {
      kit_selecionado = "3";
    } else if (document.querySelector("#pote-6").classList.contains("active")) {
      kit_selecionado = "6";
    }

    // let assinatura = false;
    // if (document.querySelector("#opcao-assinatura").length) {
    //   //Mobile
    //   assinatura = document
    //     .querySelector("#opcao-assinatura")
    //     .classList.contains("active");
    // } else if (document.querySelector("#checkbox-subscriber").length) {
    //   //Desktop
    //   assinatura = document
    //     .querySelector("#checkbox-subscriber")
    //     .is(":checked");
    // }

    // switch (kit_selecionado) {
    //   case "1":
    //     if (assinatura) {
    //       /* Assinatura */
    //       document
    //         .querySelector("#kit-preco-por-pote")
    //         .innerText("data-assinatura-1");
    //       document
    //         .querySelector("#kit-valor-parcela")
    //         .innerText("data-assinatura-1");
    //       document
    //         .querySelector("#kit-economize")
    //         .innerText("data-assinatura-1");
    //       document
    //         .querySelector("#kit-preco-a-vista")
    //         .innerText("data-assinatura-1");
    //       document
    //         .querySelector("#btn_carrinho")
    //         .setAttribute("href", innerText("href-assinatura-1"));
    //     } else {
    //       /* Compra única */
    //       document
    //         .querySelector("#kit-preco-por-pote")
    //         .innerText("data-compra-unica-1");
    //       document
    //         .querySelector("#kit-valor-parcela")
    //         .innerText("data-compra-unica-1");
    //       document
    //         .querySelector("#kit-economize")
    //         .innerText("data-compra-unica-1");
    //       document
    //         .querySelector("#kit-preco-a-vista")
    //         .innerText("data-compra-unica-1");
    //       document
    //         .querySelector("#btn_carrinho")
    //         .setAttribute("href", innerText("href-compra-unica-1"));
    //     }
    //     break;
    //   case "3":
    //     if (assinatura) {
    //       /* Assinatura */
    //       document
    //         .querySelector("#kit-preco-por-pote")
    //         .innerText("data-assinatura-3");
    //       document
    //         .querySelector("#kit-valor-parcela")
    //         .innerText("data-assinatura-3");
    //       document
    //         .querySelector("#kit-economize")
    //         .innerText("data-assinatura-3");
    //       document
    //         .querySelector("#kit-preco-a-vista")
    //         .innerText("data-assinatura-3");
    //       document
    //         .querySelector("#btn_carrinho")
    //         .setAttribute("href", innerText("href-assinatura-3"));
    //     } else {
    //       /* Compra Ãšnica */
    //       document
    //         .querySelector("#kit-preco-por-pote")
    //         .innerText("data-compra-unica-3");
    //       document
    //         .querySelector("#kit-valor-parcela")
    //         .innerText("data-compra-unica-3");
    //       document
    //         .querySelector("#kit-economize")
    //         .innerText("data-compra-unica-3");
    //       document
    //         .querySelector("#kit-preco-a-vista")
    //         .innerText("data-compra-unica-3");
    //       document
    //         .querySelector("#btn_carrinho")
    //         .setAttribute("href", innerText("href-compra-unica-3"));
    //     }
    //     break;
    //   case "6":
    //     if (assinatura) {
    //       /* Assinatura */
    //       document
    //         .querySelector("#kit-preco-por-pote")
    //         .innerText("data-assinatura-6");
    //       document
    //         .querySelector("#kit-valor-parcela")
    //         .innerText("data-assinatura-6");
    //       document
    //         .querySelector("#kit-economize")
    //         .innerText("data-assinatura-6");
    //       document
    //         .querySelector("#kit-preco-a-vista")
    //         .innerText("data-assinatura-6");
    //       document
    //         .querySelector("#btn_carrinho")
    //         .setAttribute("href", innerText("href-assinatura-6"));
    //       document.querySelector(".termos-assinatura").show();
    //     } else {
    //       /* Compra única */
    //       document
    //         .querySelector("#kit-preco-por-pote")
    //         .innerText("data-compra-unica-6");
    //       document
    //         .querySelector("#kit-valor-parcela")
    //         .innerText("data-compra-unica-6");
    //       document
    //         .querySelector("#kit-economize")
    //         .innerText("data-compra-unica-6");
    //       document
    //         .querySelector("#kit-preco-a-vista")
    //         .innerText("data-compra-unica-6");
    //       document
    //         .querySelector("#btn_carrinho")
    //         .setAttribute("href", innerText("href-compra-unica-6"));
    //     }
    //     break;
    //}
  }

  /* Tooltip (Apenas Desktop) */
  // if (document.querySelector("#checkbox-subscriber").length) {
  //   $.protip();
  // }

  /* Seta link inicial do botão */

  /* Clique nos potes */
  document.querySelector("#pote-1").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".pote").classList.remove("active");
    document.querySelector("#pote-1").classList.add("active");
    ajustarPreco();
  });

  document.querySelector("#pote-3").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".pote").classList.remove("active");
    document.querySelector("#pote-3").classList.add("active");
    ajustarPreco();
  });

  document.querySelector("#pote-6").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".pote").classList.remove("active");
    document.querySelector("#pote-6").classList.add("active");
    ajustarPreco();
  });
  //    /* Clique nos potes */

  //   document
  //     .querySelector("#opcao-compra-unica")
  //     .addEventListener("click", function (event) {
  //       document.querySelector(this).classList.add("active");
  //       document.querySelector("#opcao-assinatura").classList.remove("active");
  //       ajustarPreco();
  //     });
  //   document
  //     .querySelector("#opcao-assinatura")
  //     .addEventListener("click", function (event) {
  //       document.querySelector(this).classList.add("active");
  //       document.querySelector("#opcao-compra-unica").classList.remove("active");
  //       ajustarPreco();
  //     });

  //   /* Checkbox */
  //   document
  //     .querySelector(".checkbox-subscriber")
  //     .addEventListener("change", function () {
  //       ajustarPreco();
  //       if (document.querySelector(this).is(":checked")) {
  //         document.querySelector("#texto-sim").classList.add("text-success");
  //         document
  //           .querySelector(this)
  //           .parent()
  //           .querySelector("img")
  //           .attr("src", "../../includes/img/check-icon-mobile-checked.png");
  //         document
  //           .querySelector("ul.img-list img")
  //           .attr("src", "../../includes/img/check-icon-green.png");
  //       } else {
  //         document.querySelector("#texto-sim").classList.remove("text-success");
  //         document
  //           .querySelector(this)
  //           .parent()
  //           .querySelector("img")
  //           .attr("src", "../../includes/img/check-icon-mobile.png");
  //         document
  //           .querySelector("ul.img-list img")
  //           .attr("src", "../../includes/img/check-icon.png");
  //       }
  //     });

  //   /* Faq */

  //   // Add minus icon for collapse element which is open by default
  //   document.querySelector(".collapse.show").foreach(function () {
  //     document
  //       .querySelector(this)
  //       .prev(".card-header")
  //       .querySelector(".icon")
  //       .classList.add("icon-minus")
  //       .classList.remove("icon-plus");
  //   });

  //   // Toggle plus minus icon on show hide of collapse element
  //   document
  //     .querySelector(".collapse")
  //     .addEventListener("show.bs.collapse", function () {
  //       document
  //         .querySelector(this)
  //         .prev(".card-header")
  //         .querySelector(".icon")
  //         .classList.remove("icon-plus")
  //         .classList.add("icon-minus");
  //     })
  //     .addEventListener("hide.bs.collapse", function () {
  //       document
  //         .querySelector(this)
  //         .prev(".card-header")
  //         .querySelector(".icon")
  //         .classList.remove("icon-minus")
  //         .classList.add("icon-plus");
  //     });
});
