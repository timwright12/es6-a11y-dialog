// import the dependency
import A11yDialog from '../../../../node_modules/a11y-dialog/a11y-dialog';

// Do what we need to do
const Dialog = ( Id ) => {

    const dialogEl = document.getElementById( Id );
    const mainEl = document.getElementById( 'main' );
    const dialog = new A11yDialog( dialogEl, mainEl );

    dialog.on( 'show', function ( dialogEl, triggerEl ) {
        console.log( dialogEl );
        console.log( triggerEl );
    } );

}

export default Dialog;