<?php

/*
 * (c) stanley song <sxhuanx@gmail.com>
 */

use Flarum\Auth\Wechat\Listener;
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->subscribe(Listener\AddClientAssets::class);
    $events->subscribe(Listener\AddWechatAuthRoute::class);
};
