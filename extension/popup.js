$(function(){
    chrome.storage.sync.get(['total'],function(budget){
        $('#total').text(budget.total);
    });

    $('#spendAmount').click(function(){
        chrome.storage.sync.get(['total'],function(budget){
            var newTotal = "";
            if (budget.total!= ""){
                newTotal = budget.total;
            }

            var amount = $('#amount').val();
            if (amount != ""){
                newTotal = amount;
            }

            chrome.storage.sync.set({'total': newTotal}, function(){});
            $('#total').text(newTotal);
            $('#amount').val('');
        });
    });
});