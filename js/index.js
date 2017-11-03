/* ===================================================
 * Content toggler with min height version 1
 * =================================================== */

+(function($){
	function toggleContent(){ 
  
			var _this = this;
			/*  Here is configuration */
			this.selector     = $('.show-less'); /* hide and show content selector */
			this.btnClassName = 'btn-content-toggler'; /* read more button class name*/
			this.rgClassName  = 'rg'; /* grediant class name */
			this.toggleClassName = 'open';  /* toggler class name on read more button */
			this.minHeight    = 100; /* initial content height */
			this.moreTxt      = 'Read more';  /* button text initial */
			this.lessTxt      = 'Read Less'; /* button text after show all content */
			this.button       = '<button class="'+ this.btnClassName +'">'+this.moreTxt+'</button>';

			this.init = function(){
				if($(this.selector).length <= 0){
					return;
				}
				this.limitHeight();
				this.selector.after(this.button);
				this.toggleBtnTxt();
			};   

			this.toggleBtnTxt = function(){
				$(document).on('click', '.'+this.btnClassName, function(e){
					if( !$(e.target).hasClass(_this.toggleClassName) ){
						_this.showContent(e.target);
						$(e.target).addClass(_this.toggleClassName);
					}else{
						_this.hideContent(e.target);
						$(e.target).removeClass(_this.toggleClassName);
					}
				}); 
			};

			this.limitHeight = function(){
				this.selector
					.css({'height' : this.minHeight, 'overflow':'hidden'});
			};

			this.hideContent = function( target ){
				$(target)
					.prev()
					.css({'height' : this.minHeight, 'overflow':'hidden'})
					.removeClass(this.rgClassName);
				$(target).text(this.moreTxt);
			};

			this.showContent = function( target ){
				$(target)
					.prev()
					.css({'height': $(target).prev()[0].scrollHeight})
					.addClass(this.rgClassName);
				$(target).text(this.lessTxt);
			};

	};
	
	$(document).ready(function(){
		new toggleContent().init();	
	});
	
})(jQuery);