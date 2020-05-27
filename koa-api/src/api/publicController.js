import svgCaptcha from "svg-captcha";

class PublicController {
    constructor() {}

    async getCaptcha(ctx) {
        const captcha = svgCaptcha.create({
            // size: 6,
            ignoreChars: "0o1i",
            color: true,
            noise: Math.ceil(Math.random() * 5),
            width: 150,
            height: 38
        });
        // console.log(captcha);
        ctx.body = {
            code: 200,
            data: captcha.data
        };
    }
}

export default new PublicController();