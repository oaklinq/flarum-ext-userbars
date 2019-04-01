<?php

/*
 * This file is part of kvothe/userbars.
 *
 * Copyright (c) 2019 Kvothe.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Kvothe\Userbars;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    
    
];
