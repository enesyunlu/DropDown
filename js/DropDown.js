$(document).ready(function(){
    DD.init();
});
var DD = {
    init: function() {
        DD.DropDown.init();
    },
    DropDown: {
        init: function(){
            $(document).on('click','.dd-select', function(){
                var th          = $(this);
                var dd_options  = th.siblings('.dd-options');
                if(th.hasClass('active')){
                    th.removeClass('active');
                    DD.DropDown.dd_optionsClose();
                }
                else {
                    th.addClass('active');
                    dd_options.slideDown('400');
                }
            });
            $(document).on('click','.dd-options li', function(){
                var th = $(this);
                var thVal = th.val();
                var thText = th.text();
                th.parents('.dd-container').find('.dd-selected').html(thText);
                th.parents('.dd-container').find('.dd-selected-value').val(thVal);
                DD.DropDown.dd_optionsClose();
                DD.DropDown.dd_selectClose();
            });
            $('.dd-select').clickoutside(function() {
                DD.DropDown.dd_optionsClose();
                DD.DropDown.dd_selectClose();
            });
        },
        dd_selectClose: function () {
            var dd_select = $('.dd-select');
            dd_select.removeClass('active');
        },
        dd_optionsOpen: function() {
            var dd_options = $('.dd-options');
            dd_options.slideDown('400');
        },
        dd_optionsClose: function() {
            var dd_options = $('.dd-options');
            dd_options.slideUp('400');
        }
    }
};
jQuery.fn.clickoutside = function(callback) {
    var outside = 1, self = $(this);
    self.cb = callback;
    this.click(function() {
        outside = 0;
    });
    $(document).click(function() {
        outside && self.cb();
        outside = 1;
    });
    return $(this);
};