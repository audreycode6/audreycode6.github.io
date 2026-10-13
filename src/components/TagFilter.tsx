import type { Tag } from '../content/types';

type TagFilterProps = {
  tags: Tag[];
  selected: Tag | null;
  onSelect: (tag: Tag | null) => void;
};

export function TagFilter({ tags, selected, onSelect }: TagFilterProps) {
  return (
    <div className="tag-filter">
      <button
        type="button"
        aria-pressed={selected === null}
        onClick={() => onSelect(null)}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          aria-pressed={selected === tag}
          onClick={() => onSelect(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
