interface Pick {
    <Obj, Key extends keyof Obj>(obj: Obj, key: Key): Obj[Key]
    wait<Obj>(obj: Obj): <Key extends keyof Obj>(key: Key) => Obj[Key]
    curry<Key extends string|number>(key: Key): <Obj extends Record<Key, any>>(obj: Obj) => Obj[typeof key]
}

export const pick: Pick = (obj, key) => obj[key];
pick.wait = obj => key => pick(obj, key);
pick.curry = key => obj => pick(obj, key);