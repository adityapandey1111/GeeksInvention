import React, {useEffect} from "react";
import $ from "jquery";

const Loader = () => {

    useEffect(() => {
        // Hide the loader when the DOM is ready
        $(document).ready(function() {
          $('#status').fadeOut();
          $('#preloader').delay(350).fadeOut('slow');
          $('#body').delay(350).css({
            'overflow': 'visible'
          });
        });
      }, []);

    return(

        <div className="preloader" id="preloader">
            <div className="status" id="status">
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
            </div>
        </div>
    )
}

export default Loader;