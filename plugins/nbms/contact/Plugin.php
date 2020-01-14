<?php namespace Nbms\Contact;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
        return [
            'Nbms\Contact\Components\ContactForm' => 'contactform'
        ];
    }

    public function registerSettings()
    {
    }
}
