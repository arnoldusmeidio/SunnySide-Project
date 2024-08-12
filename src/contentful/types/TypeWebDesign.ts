import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeWebDesignFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  client: EntryFieldTypes.Symbol;
  web: EntryFieldTypes.AssetLink;
}

export type TypeWebDesignSkeleton = EntrySkeletonType<
  TypeWebDesignFields,
  "webDesign" | string
>;
export type TypeWebDesign<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeWebDesignSkeleton, Modifiers, Locales>;
