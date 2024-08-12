import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeGraphicDesignFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  client: EntryFieldTypes.Symbol;
  graphic: EntryFieldTypes.AssetLink;
}

export type TypeGraphicDesignSkeleton = EntrySkeletonType<
  TypeGraphicDesignFields,
  "graphicDesign"
>;
export type TypeGraphicDesign<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeGraphicDesignSkeleton, Modifiers, Locales>;
