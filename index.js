$(document).ready(function() {


    //init ScrollMagic

    var controller = new ScrollMagic.Controller();

    //build scene
    var scene_1 = new ScrollMagic.Scene({
        triggerElement: '#about-title',
    })
    .setClassToggle('#about-title', 'ab-title-animation')
    .addTo(controller);

    var scene_2 = new ScrollMagic.Scene({
        triggerElement: '#profile-1',
    })
    .setClassToggle('#profile-1', 'prof-anim')
    .addTo(controller);

    var scene_3 = new ScrollMagic.Scene({
        triggerElement: '#profile-2'
    })
    .setClassToggle('#profile-2', 'prof-anim-2')
    .addTo(controller);

    var scene_4 = new ScrollMagic.Scene({
        triggerElement: '#profile-3'
    })
    .setClassToggle('#profile-3', 'prof-anim-3')
    .addTo(controller);

});