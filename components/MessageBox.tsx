import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import Markdown from "./Markdown";

type Props = {
  role: string;
  content: string;
};

const MessageBox = ({ role, content }: Props) => {
  return (
    <Card className="overflow-hidden bg-transparent">
      <CardContent className="p-6 text-sm">
        <Markdown text={content} />
      </CardContent>
      {role !== "user" && (
        <CardFooter className="border-t bg-transparent  px-6 py-3 text-xs text-muted-foreground">
          Disclaimer: The medical insights and suggestions provided by this
          application are for informational purposes only and should not be
          considered a geniune advice. Please consult a Psychiatrist before
          applying.
        </CardFooter>
      )}
    </Card>
  );
};

export default MessageBox;
