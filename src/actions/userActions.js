function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const userActions = {
  update: async attrubutes => {
    // query api, check result, return status/data
    await timeout(1000);

    return { status: "ok" };
  }
};

export default userActions;
