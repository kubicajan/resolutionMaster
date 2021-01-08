export const Links: LinksInterface = {
  login: "/login",
  register: "/register",
};

interface LinkWithArgsType {
  link: string;
  parser: string;
}

interface LinksInterface {
  // AUTH //
  login: string;
  register: string;
}

export const getLink = (
  link: string | LinkWithArgsType,
  args?: string[]
): string => {
  if (typeof link === "object") {
    if (args) {
      const argsCount: undefined[] = Array.from(Array(args.length));
      let updatedLink: string = link.parser;

      argsCount.forEach((_: undefined, i: number) => {
        updatedLink = updatedLink.replace(`{${i}}`, args[i]);
      });

      return updatedLink;
    }

    return link.link;
  }

  return link;
};
