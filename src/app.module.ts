import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLISODateTime } from '@nestjs/graphql';
import { join } from 'path';
import { PrismaService } from './prisma/prisma.service';
import { ListingModule } from './listing/listing.module';
import { ItemModule } from './items/item.module';
import { UniqueItemModule } from './unique-item/unique-item.module';
import { CollectionsModule } from './collections/collections.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      // autoSchemaFile: join(process.cwd(), 'src/types/schema.gql'),
      typePaths: ['./**/*.gql'],
      // resolvers: { DateTime: GraphQLISODateTime },
      uploads: false,
    }),
    ListingModule,
    ItemModule,
    UniqueItemModule,
    CollectionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
