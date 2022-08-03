export const getData = async(cpf:string) => {
    const headers = new Headers();
    const url = new URL(
        `http://gcp.dudeful.com:5000/users?cpf=${cpf}`
      );
      const data = await (
        await fetch(url.toString(), { method: "GET", headers })
      ).json();

    return await data
}