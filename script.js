const copyButton = document.getElementById('copy-btn');
const discountCode = document.getElementById('copy-code');

copyButton.addEventListener('click',function(event)
{
    discountCode.select();
    document.execCommand('copy');
    alert("Coped");
})
