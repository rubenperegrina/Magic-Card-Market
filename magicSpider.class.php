<?php

/**
 * Created by PhpStorm.
 * User: rubenperegrina
 * Date: 9/3/17
 * Time: 9:56
 */
class MagicSpider
{


    function openURL() {

        $content = file_get_contents("http://mcm.llampec.net/ajax.php?mode=articles&size=101&start=202&timestamp=1489049646838");

        echo $content;

    }


}