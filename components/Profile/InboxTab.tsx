import React from "react";
import {
  PaginationPrevious,
  Pagination,
  PaginationLink,
  PaginationContent,
  PaginationItem,
  PaginationEllipsis,
  PaginationNext,
} from "../ui/pagination";

const InboxTab = () => {
  return (
    <div className="flex flex-col gap-4 p-4 h-full overflow-y-auto">
      {Array.from({ length: 10 }).map((_, index) => (
        <InboxItem
          key={index}
          date="November 11, 2024"
          title="Order Update"
          content="Your recent order has been shipped and is on the way. Expected delivery is within 3-5 business days."
        />
      ))}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default InboxTab;

const InboxItem = ({
  date,
  title,
  content,
}: {
  date?: string;
  title?: string;
  content?: string;
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col gap-2 w-full max-w-md mx-auto md:max-w-full">
      {/* Date */}
      <p className="text-xs text-gray-500">{date}</p>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

      {/* Content */}
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  );
};
