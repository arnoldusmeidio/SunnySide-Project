import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeLogoFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  client: EntryFieldTypes.Symbol;
  logo: EntryFieldTypes.AssetLink;
}

export type TypeLogoSkeleton = EntrySkeletonType<TypeLogoFields, "logo">;
export type TypeLogo<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeLogoSkeleton, Modifiers, Locales>;
