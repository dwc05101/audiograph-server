import { Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from '../../common/dtos/output.dto';

@ObjectType()
export class CreateHtsAccountOutput extends CoreOutput {
  @Field(is => String, { nullable: true })
  htsAccountId?: string;

  @Field(is => String, { nullable: true })
  privateKey?: string;
}
