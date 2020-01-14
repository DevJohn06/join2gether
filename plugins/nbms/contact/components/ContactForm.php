<?php namespace Nbms\Contact\Components;

use Cms\Classes\ComponentBase;

use Input;

use Mail;

class ContactForm extends ComponentBase 
{
    public function componentDetails() {
        return [
            'name' => 'Contact Form',
            
            'description' => 'Simple contact form'
        ];
    }

    public function onSend() {

        $vars = [
            'name' => Input::get('name'), 
            'email' => Input::get('email'),
            'phone' => Input::get('phone'), 
            'content' => Input::get('content') 
            ];

                Mail::send('nbms.contact::mail.message', $vars, function($message) {

                $message->to('info@nbmsinc.com', 'Admin Person');

                $message->subject('New message from website contact form');
            });
    }
}
