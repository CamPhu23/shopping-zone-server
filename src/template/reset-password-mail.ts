const ResetPasswordTemplate = (reset_password_url: string) => {
    return (`
    <!doctype html>
    <html lang="en-US">

    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <title></title>
        <meta name="description" content="Reset Password Email Template.">
        <style type="text/css">
            a:hover {text-decoration: underline !important;}
        </style>
    </head>

    <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
        <!--100% body table-->
        <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
            style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
            <tr>
                <td>
                    <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                        align="center" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="height:80px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;">
                              <a href="https://rakeshmandal.com" title="logo" target="_blank">
                                <img style="border-radius: 50%" width="150" src="https://res.cloudinary.com/dazdxrnam/image/upload/v1657711523/ShoppingZone/Logo_kum5un.jpg" title="logo" alt="logo">
                              </a>
                            </td>
                        </tr>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td>
                                <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                    style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0 35px;">
                                            <h1>SHOPPING ZONE</h1>
                                            <h2 style="color:#1e1e2d; font-weight:500; margin:0;font-size:24px;font-family:'Rubik',sans-serif;">Ch??ng t??i nh???n ???????c y??u c???u ?????t l???i m???t kh???u t??? b???n.</h2>
                                            <span
                                                style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:220px;">
                                            </span>
                                            <br>
                                            <a href="${reset_password_url}" target="_blank"
                                                style="background:#10b981;text-decoration:none !important; font-weight:500; margin-top:15px; color:#fff;text-transform:uppercase; font-size:14px; padding:10px 24px;display:inline-block; border-radius:50px;">?????t l???i m???t kh???u
                                            </a>
                                            
                                            <p style="color:#455056; font-size:15px;line-height:24px; margin-top:15px; text-align:justify;">
                                            N???u n??t ?????t l???i m???t kh???u kh??ng ho???t ?????ng h??y b???m v??o ???????ng link sau.
                                            Li??n k???t s??? h???t h???n trong 5 ph??t: 
                                                <a href="${reset_password_url}" target="_blank">?????t l???i m???t kh???u</a>
                                            </p>
                                            <p style="color:#455056; font-size:15px;line-height:24px; margin:0; margin-top:25px; text-align:justify;">
                                                Tr??n tr???ng, <br> Shopping Zone.
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                </table>
                            </td>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>
                       
                    </table>
                </td>
            </tr>
        </table>
        <!--/100% body table-->
    </body>

    </html>
    `)
}

export default ResetPasswordTemplate