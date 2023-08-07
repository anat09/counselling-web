import React, { useCallback } from 'react';

import { User as FirebaseUser } from "firebase/auth";
import {
    Authenticator,
    buildCollection,
    buildProperty,
    EntityReference,
    FirebaseCMSApp,
    SaveEntityProps,
    useFirestoreDataSource,
    useInitialiseFirebase
} from "firecms";

import "typeface-rubik";
import "@fontsource/ibm-plex-mono";

import { BlogEntryPreview } from 'components/cms';
import { BlogEntry } from 'actions/blog'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};


export const blogCollection = buildCollection<BlogEntry>({
  name: "Entry",
  path: "blog",
  views: [{
      path: "preview",
      name: "Preview",
      Builder: BlogEntryPreview
  }],
  group: "Blog",
  properties: {
    name: buildProperty({
      name: "Name",
      validation: { required: true },
      dataType: "string"
    }),
    slug: buildProperty({
      name: "Slug",
      validation: { required: true },
      dataType: "string",
      columnWidth: 200,
      description: "This is the url friendly identifier for the blog post",
    }),
    description: buildProperty({
      name: "Description",
      validation: { required: true },
      dataType: "string",
      description: "This is the description that will appear in the blog post list"
    }),
    header_image: buildProperty({
      name: "Header image",
      dataType: "string",
      storage: {
        mediaType: "image",
        storagePath: "images",
        acceptedFiles: ["image/*"],
        metadata: {
          cacheControl: "max-age=1000000"
        }
      }
    }),
    content: buildProperty({
      name: "Content",
      description: "The content of the blog post including markdown text and images",
      validation: { required: true },
      dataType: "array",
      columnWidth: 400,
      oneOf: {
        typeField: "type", // you can omit these `typeField` and `valueField` props to use the defaults
        valueField: "value",
        properties: {
          images: buildProperty({
              name: "Images",
              dataType: "array",
              of: buildProperty({
                  dataType: "string",
                  storage: {
                      mediaType: "image",
                      storagePath: "images",
                      acceptedFiles: ["image/*"],
                      metadata: {
                          cacheControl: "max-age=1000000"
                      }
                  }
              }),
              description: "Thess fields allow uploading multiple images at once and reordering"
          }),
          text: buildProperty({
              dataType: "string",
              name: "Text",
              markdown: true
          }),
        }
      }
    }),
    status: buildProperty(({ values }) => ({
      name: "Status",
      validation: { required: true },
      dataType: "string",
      columnWidth: 140,
      enumValues: {
        published: {
          id: "published",
          label: "Published",
          disabled: !values.header_image
        },
        draft: "Draft"
      },
      defaultValue: "draft"
    })),
    created_on: buildProperty({
      name: "Created on",
      dataType: "date",
      autoValue: "on_create"
    })
  }
})

export default function CMS() {
  const allowedEmails = [
    process.env.NEXT_PUBLIC_TS,
    process.env.NEXT_PUBLIC_AT
  ];
  const myAuthenticator: Authenticator<FirebaseUser> = useCallback(async ({ user, authController }) => {
    return allowedEmails.includes(user?.email?.toString())
  }, []);

  return <FirebaseCMSApp
    name={"AT Counselling Services"}
    basePath={"/admin"}
    authentication={myAuthenticator}
    collections={[blogCollection]}
    firebaseConfig={firebaseConfig}
  />;
}