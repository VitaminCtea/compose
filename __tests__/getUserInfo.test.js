import { getUserInfo } from "../temp/getUser";

test("works with promises", async () => {
	const data = await getUserInfo("https://getman.cn/mock/user");
	expect(data).toEqual({
		sites: {
			site: [
				{
					id: "1",
					name: "菜鸟教程",
					url: "www.runoob.com"
				},
				{
					id: "2",
					name: "菜鸟工具",
					url: "c.runoob.com"
				},
				{
					id: "3",
					name: "Google",
					url: "www.google.com"
				}
			]
		}
	});
});