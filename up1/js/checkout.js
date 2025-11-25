const baseLinks = {
    up1: "https://pay.blackfridaytech.site/YL9jZDWqzp83p4q", // IOF
    up2: "https://pay.blackfridaytech.site/DPXw3Xe7MWdZzmp", // Taxa de verificação de IOF
    up3: "https://pay.blackfridaytech.site/bz5KZbVaM2YZ7dL", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://pay.blackfridaytech.site/PyE2Zy8EJxn3qRb", // NFe
    up5: "https://pay.blackfridaytech.site/NDr8gmKAkDqZBmj", // Ativar conta
    up6: "https://pay.blackfridaytech.site/65XDZB8aV0bgVJw", // Taxa de registro do contrato
    up7: "https://pay.blackfridaytech.site/n1NLgwJ9jrYGMxE", // Parabéns, 20k adicional
    up8: "https://pay.blackfridaytech.site/N1nVZpYQl0AGlM6", // Erro no pagamento - 14,06
    up9: "https://pay.blackfridaytech.site/xQBPZvRM5EaZmVq", // APP - 11,99
    up10:"https://pay.blackfridaytech.site/DPXw3Xe7MpkZzmp", // Taxa de Abertura TAC - 16,92
    up11:"https://pay.blackfridaytech.site/DPXw3Xe7M2kZzmp",// Taxa de Consultoria Financeira - 19,53
    up12:"https://pay.blackfridaytech.site/zj6aGnAn1ydZwlK" // prioridade de saque  - 56,90
  
};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}



// UTMIFY, troque o pixel só aqui, belê?
(function() {
 window.googlePixelId = "6925c25ae5507d3e2ec71c51";
  var a = document.createElement("script");
  a.setAttribute("async", "");
  a.setAttribute("defer", "");
  a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel-google.js");
  document.head.appendChild(a);
})();


(function() {
    const script = document.createElement('script');
    
    script.src = 'https://cdn.utmify.com.br/scripts/utms/latest.js';
    script.setAttribute('data-utmify-prevent-xcod-sck', '');
    script.setAttribute('data-utmify-prevent-subids', '');
    script.async = true;
    script.defer = true;

    document.head.appendChild(script);
})();


// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);

history.pushState({}, '', location.href);

