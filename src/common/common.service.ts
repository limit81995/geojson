export class CommonService{
    /**
     * 成功返回
     * @param result
     * @param msg
     */
    public static success(result: any = {}, msg: string = "success"): object{
        return {
            code:"1",
            msg:msg,
            result:result,
        }
    }

    /**
     * 失败返回
     * @param result
     * @param msg
     */
    public static error(msg: string = "error",result: any = {}): object{
        return {
            code:"0",
            msg:msg,
            result:result,
        }
    }
}