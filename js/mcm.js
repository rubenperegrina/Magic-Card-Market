
function loading() {
    return '<table width="100%" height="100%"><tr><td style="text-align:center"><img src="images/loading.gif" width="50px" align="middle" /></td></tr></table>';
}

function loadSection(elem) {
    if (!$(elem).hasClass('menuItemSelected')){
        selectMenuOption(elem);
        $("#content").html( loading() ).load("ajax.php?mode=" + $(elem).attr("ajax") + "&timestamp="+ new Date().getTime());
    }
}

function hideSubmenu1() {
    $('#subMenu').animate({
        "left": "200px",
        "width": "0px"
    }, "slow" );
}

function showSubmenu1() {
    $('#subMenu').animate({
        "left": "45px",
        "width": "155px"
    }, "slow" );
}

function selectMenuOption(elem) {
    if ($(elem).hasClass('menuItem')) {
        $('#menu .menuItem').removeClass('menuItemSelected');
    }

    $('#subMenu .subMenuItem').removeClass('menuItemSelected');
    $(elem).addClass('menuItemSelected');
}

function updateInfoCrons() {
    $("#infoCron").html("Loading...").load("ajax.php?mode=infoCrons&timestamp="+ new Date().getTime());
}

function forceUpdateStock (id_list) {
    if (confirm('Are you sure that you want to update Trend?')) {
        $("#infoCron").html("Loading...").load("ajax.php?mode=infoCrons&updtlist=" + id_list + "&timestamp="+ new Date().getTime());
    }
}

function updateInterfArticles(){
    //parms
    var params = "";
    if ($('#num_rows').val() != '') params += "&size="+$('#num_rows').val();
    if ($('#start_row').val() != '') params += "&start="+$('#start_row').val();
    if ($('#filter_name').val() != '') params += "&filter_name="+$('#filter_name').val();
    if ($('#filter_expansion').val() != '') params += "&filter_expansion="+$('#filter_expansion').val();
    if ($('#filter_rarity').val() != '') params += "&filter_rarity="+$('#filter_rarity').val();
    if ($('#filter_foil').val() != '') params += "&filter_foil="+$('#filter_foil').val();
    if ($('#filter_language').val() != '') params += "&filter_language="+$('#filter_language').val();
    if ($('#filter_signed').val() != '') params += "&filter_signed="+$('#filter_signed').val();
    if ($('#filter_condition').val() != '') params += "&filter_condition="+$('#filter_condition').val();
    if ($('#filter_condition').val() != '') params += "&filter_condition="+$('#filter_condition').val();
    if ($('#filter_playset').val() != '') params += "&filter_playset="+$('#filter_playset').val();
    if ($('#filter_price').val() != '') params += "&filter_price="+$('#filter_price').val();
    if ($('#filter_price_2').val() != '') params += "&filter_price_2="+$('#filter_price_2').val();
    if ($('#filter_quantity').val() != '') params += "&filter_quantity="+$('#filter_quantity').val();
    if ($('#filter_quantity_2').val() != '') params += "&filter_quantity_2="+$('#filter_quantity_2').val();

    //req
    $("#content").html( loading() ).load("ajax.php?mode=articles"+encodeURI(params)+"&timestamp="+ new Date().getTime());
}


function updateInterfStock(id_list){
    var params = "";

    //generic
    if ($('#num_rows').val() != '') params += "&size="+$('#num_rows').val();
    if ($('#start_row').val() != '') params += "&start="+$('#start_row').val();

    //prod
    if ($('#filter_name').val() != '') params += "&filter_name="+$('#filter_name').val();
    if ($('#filter_expansion').val() != '') params += "&filter_expansion="+$('#filter_expansion').val();
    if ($('#filter_rarity').val() != '') params += "&filter_rarity="+$('#filter_rarity').val();
    if ($('#filter_foil').val() != '') params += "&filter_foil="+$('#filter_foil').val();
    if ($('#filter_min').val() != '') params += "&filter_min="+$('#filter_min').val();
    if ($('#filter_min_2').val() != '') params += "&filter_min_2="+$('#filter_min_2').val();
    if ($('#filter_trend').val() != '') params += "&filter_trend="+$('#filter_trend').val();
    if ($('#filter_trend_2').val() != '') params += "&filter_trend_2="+$('#filter_trend_2').val();
    if ($('#filter_quantity_prod').val() != '') params += "&filter_quantity_prod="+$('#filter_quantity_prod').val();
    if ($('#filter_quantity_prod_2').val() != '') params += "&filter_quantity_prod_2="+$('#filter_quantity_prod_2').val();
    if ($('#filter_color_prod').val() != '') params += "&filter_color_prod="+$('#filter_color_prod').val();

    //art
    if ($('#filter_quantity_art').val() != '') params += "&filter_quantity_art="+$('#filter_quantity_art').val();
    if ($('#filter_quantity_art_2').val() != '') params += "&filter_quantity_art_2="+$('#filter_quantity_art_2').val();
    if ($('#filter_language').val() != '') params += "&filter_language="+$('#filter_language').val();
    if ($('#filter_signed').val() != '') params += "&filter_signed="+$('#filter_signed').val();
    if ($('#filter_condition').val() != '') params += "&filter_condition="+$('#filter_condition').val();
    if ($('#filter_playset').val() != '') params += "&filter_playset="+$('#filter_playset').val();
    if ($('#filter_price').val() != '') params += "&filter_price="+$('#filter_price').val();
    if ($('#filter_price_2').val() != '') params += "&filter_price_2="+$('#filter_price_2').val();
    if ($('#filter_color_art').val() != '') params += "&filter_color_art="+$('#filter_color_art').val();

    //req
    $("#content").html( loading() ).load("ajax.php?mode=stock&id_trend="+id_list+encodeURI(params)+"&timestamp="+ new Date().getTime());
}

